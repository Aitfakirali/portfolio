import {
  Column,
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { fireEvent, render, screen } from '@testing-library/react';

import { TableFooter } from '../TableFooter';

interface RowShape {
  name: string;
  declaration_number: string;
}

const columnHelper = createColumnHelper<RowShape>();

const columns = [
  columnHelper.accessor('name', {
    header: 'Nom complet/ RS',
    id: 'Nom complet/ RS',
  }),
  columnHelper.accessor('declaration_number', {
    header: 'Declaration Number',
    id: 'Declaration Number',
  }),
] as Column<RowShape>[];

const tableData: RowShape[] = [
  {
    name: 'fohn Doe',
    declaration_number: '146876',
  },
  {
    name: 'fohn Doe',
    declaration_number: '146876',
  },
  {
    name: 'hohn Doe',
    declaration_number: '246876',
  },
  {
    name: 'John Doe',
    declaration_number: '346876',
  },
];

const Template = () => {
  const table = useReactTable({
    columns,
    data: [...tableData, ...tableData, ...tableData, ...tableData],
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <TableFooter
      table={table}
      hidePerPageView={true}
      perPageOptions={[1, 2, 3]}
    />
  );
};

describe('TableFooter', () => {
  it('should render', () => {
    render(<Template />);
    expect(screen.getByText('Ligne par page')).toBeInTheDocument();
  });

  it('should render the correct number per page', () => {});

  it('should render the correct page count', () => {
    render(<Template />);
    expect(screen.getByText('Page 1 sur 2')).toBeInTheDocument();
  });

  it('should render the 4 buttons and the select as button', () => {
    render(<Template />);
    expect(document.querySelectorAll('button').length).toBe(5);
  });

  it("should got to the next page when clicking on the 'next' button", () => {
    render(<Template />);
    expect(screen.getByText('Page 1 sur 2')).toBeInTheDocument();
    const nextBtn = document.querySelectorAll('button')[3];
    fireEvent.click(nextBtn);
    expect(screen.getByText('Page 2 sur 2')).toBeInTheDocument();

    const prevBtn = document.querySelectorAll('button')[2];
    fireEvent.click(prevBtn);
    expect(screen.getByText('Page 1 sur 2')).toBeInTheDocument();
  });

  it("should got to the previous page when clicking on the 'previous' button", () => {
    render(<Template />);
    expect(screen.getByText('Page 1 sur 2')).toBeInTheDocument();
    const lastBtn = document.querySelectorAll('button')[4];
    fireEvent.click(lastBtn);
    expect(screen.getByText('Page 2 sur 2')).toBeInTheDocument();
    const firstBtn = document.querySelectorAll('button')[1];
    fireEvent.click(firstBtn);
    expect(screen.getByText('Page 1 sur 2')).toBeInTheDocument();
  });
});
