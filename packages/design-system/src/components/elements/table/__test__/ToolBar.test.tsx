import {
  Column,
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { render, screen } from '@testing-library/react';

import { ToolBar } from '../ToolBar';

interface RowShape {
  name: string;
  declaration_number: string;
  cin: string;
  declaration_date: string;
  type: string;
}

const columnHelper = createColumnHelper<RowShape>();

const columns = [
  columnHelper.accessor('name', {
    header: 'Nom complet/ RS',
    id: 'Nom complet/ RS',
  }),
  columnHelper.accessor('cin', {
    header: 'CIN',
    id: 'CIN',
  }),
  columnHelper.accessor('declaration_number', {
    header: 'Declaration Number',
    id: 'Declaration Number',
  }),
  columnHelper.accessor('declaration_date', {
    header: 'Declaration Date',
    id: 'Declaration Date',
    sortingFn: 'datetime',
  }),
  columnHelper.accessor('type', {
    header: 'Type',
    id: 'Type',
    enableSorting: false,
    filterFn: 'equalsString',
  }),
] as Column<RowShape>[];

const tableData: RowShape[] = [
  {
    name: 'fohn Doe',
    declaration_number: '146876',
    cin: 'AB5789',
    declaration_date: '10/12/2020',
    type: 'TVA',
  },
  {
    name: 'fohn Doe',
    declaration_number: '146876',
    cin: 'TET9798',
    declaration_date: '10/12/2020',
    type: 'TVA',
  },
  {
    name: 'hohn Doe',
    declaration_number: '246876',
    cin: 'AB5789',
    declaration_date: '12/12/2020',
    type: 'RMA',
  },
  {
    name: 'John Doe',
    declaration_number: '346876',
    cin: 'AB5789',
    declaration_date: '10/11/2022',
    type: 'RMA',
  },
];

const Template = () => {
  const table = useReactTable({
    columns,
    data: tableData,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <ToolBar
      table={table}
      columnsView={true}
      searchBy='CIN'
      facetedFilterBy='Type'
      options={{
        Type: [
          {
            label: 'TVA',
            value: 'TVA',
          },
          {
            label: 'RMA',
            value: 'RMA',
          },
        ],
      }}
    />
  );
};

describe('ToolBar', () => {
  it('should render', () => {
    render(<Template />);
    expect(screen.getByPlaceholderText('Filter CIN...')).toBeInTheDocument();
  });

  it('should render columns view', () => {
    render(<Template />);
    expect(screen.getByText('View')).toBeInTheDocument();
  });

  it('should render the filter', () => {
    render(<Template />);
    expect(screen.getByText('Type')).toBeInTheDocument();
  });
});
