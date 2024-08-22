import { Column, createColumnHelper } from '@tanstack/react-table';
import { render } from '@testing-library/react';

import { Table } from '../Table';

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

describe('Table', () => {
  it('should render', () => {
    render(<Table selectRows={false} data={tableData} columns={columns} />);
    expect(document.querySelector('table')).toBeInTheDocument();
  });
});
