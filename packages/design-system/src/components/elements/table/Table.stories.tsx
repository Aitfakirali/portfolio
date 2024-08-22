import type { Meta, StoryObj } from '@storybook/react';
import { Column, createColumnHelper } from '@tanstack/react-table';
import React from 'react';

import { Table } from './Table';
import { Text } from '../typography/Text';

interface Status {
  element: React.JSX.Element;
  value: string;
}

interface RowShape {
  name: string;
  declaration_number: string;
  cin: string;
  declaration_date: string;
  type: string;
  status: Status;
}

const columnHelper = createColumnHelper<RowShape>();

const options = {
  Status: [
    {
      element: <Text className='text-[#74A932]'>Completed</Text>,
      value: 'Completed',
    },
    {
      element: <Text className='text-[#DCA942]'>En attente</Text>,
      value: 'En attente',
    },
    {
      element: <Text>Confirmé</Text>,
      value: 'Confirmé',
    },
  ],
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
};

const data: RowShape[] = [
  {
    name: 'fohn Doe',
    declaration_number: '146876',
    cin: 'AB5789',
    declaration_date: '10/12/2020',
    type: 'TVA',
    status: {
      element: <Text>Confirmé</Text>,
      value: 'Confirmé',
    },
  },
  {
    name: 'fohn Doe',
    declaration_number: '146876',
    cin: 'TET9798',
    declaration_date: '10/12/2020',
    type: 'TVA',
    status: {
      element: <Text>Confirmé</Text>,
      value: 'Confirmé',
    },
  },
  {
    name: 'hohn Doe',
    declaration_number: '246876',
    cin: 'AB5789',
    declaration_date: '12/12/2020',
    type: 'RMA',
    status: {
      element: <Text className='text-[#DCA942]'>En attente</Text>,
      value: 'En attente',
    },
  },
  {
    name: 'John Doe',
    declaration_number: '346876',
    cin: 'AB5789',
    declaration_date: '10/11/2020',
    type: 'RMA',
    status: {
      element: <Text className='text-[#74A932]'>Completed</Text>,
      value: 'Completed',
    },
  },
];

const columns: Column<RowShape>[] = [
  columnHelper.accessor('name', {
    header: 'Full Name',
    id: 'Full Name',
  }),
  columnHelper.accessor('declaration_number', {
    header: 'Declaration Number',
    id: 'Declaration Number',
  }),
  columnHelper.accessor('cin', {
    header: 'CIN',
    id: 'CIN',
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
    filterFn: (row, id, filterValue) => filterValue.includes(row.getValue(id)),
  }),
  columnHelper.accessor((row) => row.status.value, {
    header: 'Status',
    id: 'Status',
    filterFn: (row, id, filterValue) => filterValue.includes(row.getValue(id)),
    cell: ({ row }) => row.original.status.element,
  }),
] as Column<RowShape>[];

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

//TODO: footer perpage view arr to the footer

export const Primary: Story = {
  args: {
    data: [...data, ...data, ...data, ...data],
    columns: columns,
    options: options,
    facetedFilterBy: 'Status,Type',
    searchBy: 'CIN',
    selectMultipleRows: false,
    perPageOptions: [5, 10, 15, 20],
    pageSize: 5,
  },
  render: (args) => <Table {...args} />,
};
