import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  Table as TableType,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';
import clsx from 'clsx';
import React, {
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { TableFooter } from './TableFooter';
import { TableTheme } from './theme';
import { ToolBar } from './ToolBar';
import { Checkbox } from '../form-elements/checkbox/Checkbox';
import { Radio } from '../form-elements/radio/Radio';
import { Icon } from '../icon/Icon';
import { useUpdateEffect } from '../../../hooks/useUpdateEffect';
/**
 *
 */
export interface OptionsType {
  [key: string]: {
    /**
     *
     */
    element?: React.ReactNode;
    /**
     *
     */
    value: string;
    /**
     *
     */
    label?: string;
  }[];
}
/**
 *
 */
export interface DataTableProps<TData, TValue> {
  /**
   * table columns
   */
  columns: ColumnDef<TData, TValue>[];
  /**
   * table data
   */
  data: TData[];
  /**
   * whether to show the select row checkbox/radioButton
   */
  selectRows?: boolean;
  /**
   * the options for the facetedFilterBy
   */
  options?: OptionsType;
  /**
   * the column to search by, an array of columns can be passed example: {Status:[],Type:[]}
   */
  searchBy?: string;
  /**
   * the column to filter by example: 'Status,Type' add a comma to separate multiple columns
   */
  facetedFilterBy?: string;
  /**
   * whether to to select multiple rows
   */
  selectMultipleRows?: boolean;
  /**
   * whether to show the columns view (where you can hide/show columns)
   */
  columnsView?: boolean;
  /**
   * whether to show the footer
   */
  showFooter?: boolean;
  /**
   * to be called when the selected rows change
   */
  onChange?: (rows: TData[]) => void;
  /**
   * the initial page size
   */
  pageSize?: number;
  /**
   * the options for the page size
   */
  perPageOptions?: number[];
  /**
   * the theme variant
   */
  variant?: keyof typeof TableTheme;
  /**
   * the total number of pages
   */
  totalPages?: number;
  /**
   *  the current page
   */
  currentPage?: number;
  /**
   *  it's called whenever the per page selected changes
   */
  onLinePerPageChange?: (e: string) => void;
  /**
   * it's called whenever the first page button is clicked
   */
  onFirstPage?: () => void;
  /**
   *  it's called whenever the last page button is called
   */
  onLastPage?: () => void;
  /**
   *  it's called whenever the next page button is called
   */
  onNextPage?: () => void;
  /**
   * it's called whenever the previous page button is called
   */
  onPrevPage?: () => void;
  /**
   *
   */
  disableFooterButtons?: {
    /**
     * disable the first page button if true
     */
    first?: boolean;
    /**
     * disable the last page button if true
     */
    last?: boolean;
    /**
     * disable the next page button if true
     */
    next?: boolean;
    /**
     * disable the previous page button if true
     */
    previous?: boolean;
  };
  /**
   * show the loading skeleton while it's true
   */
  isLoading?: boolean;
  /**
   *
   */
  hidePerPageView?: boolean;
}

/**
 *
 */
const TableInner = <TData, TValue>(
  {
    columns,
    data,
    selectRows = true,
    selectMultipleRows = true,
    columnsView = true,
    showFooter = true,
    options,
    searchBy,
    facetedFilterBy,
    pageSize = 10,
    perPageOptions = [10, 20, 30, 40, 50],
    variant = 'default',
    totalPages,
    currentPage,
    onChange,
    onLinePerPageChange,
    onFirstPage,
    onLastPage,
    onNextPage,
    onPrevPage,
    disableFooterButtons,
    isLoading,
    hidePerPageView,
  }: DataTableProps<TData, TValue>,
  ref: React.Ref<unknown> | undefined,
) => {
  const tableRef = useRef<HTMLTableElement>(null);
  const tableWrapperRef = useRef<HTMLDivElement>(null);
  const [shouldShowScrollIndice, setShouldShowScrollIndice] = useState(false);

  useEffect(() => {
    if (tableRef?.current && tableWrapperRef?.current) {
      setShouldShowScrollIndice(
        tableRef?.current?.offsetWidth > tableWrapperRef?.current?.offsetWidth,
      );
    }
  }, [tableRef, tableWrapperRef]);

  const [rowSelection, setRowSelection] = useState({});

  const initialVisibility: Record<string, boolean> = {};

  columns.forEach((col: any) => {
    if (col.hidden && col.id) {
      initialVisibility[col.id] = false;
    }
  });

  const toggleSelected = (value: boolean) => {
    table.toggleAllRowsSelected(value);
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        reset: () => {
          toggleSelected(false);
        },
      };
    },
    [],
  );

  const [columnVisibility, setColumnVisibility] =
    useState<VisibilityState>(initialVisibility);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  useUpdateEffect(() => {
    onChange &&
      onChange(
        table.getFilteredSelectedRowModel().rows.map((row) => row.original),
      );
  }, [rowSelection]);
  const tableColumns = selectRows
    ? [
        {
          id: 'select',
          header: ({
            table,
          }: {
            /**
             *
             */
            table: TableType<TData>;
          }) =>
            selectMultipleRows ? (
              <Checkbox
                checked={table.getIsAllRowsSelected()}
                onChange={(value) => {
                  table.toggleAllRowsSelected(value.currentTarget.checked);
                }}
                aria-label='Select all'
              />
            ) : (
              <span></span>
            ),
          cell: ({
            row,
          }: {
            /**
             *
             */
            row: Row<TData>;
          }) =>
            selectMultipleRows ? (
              <Checkbox
                checked={row.getIsSelected()}
                onChange={(value) => {
                  if (!selectMultipleRows) {
                    table.toggleAllRowsSelected(false);
                  }
                  row.toggleSelected(value.currentTarget.checked);
                }}
                aria-label='Select row'
              />
            ) : (
              <Radio
                name='select'
                value={row.id}
                checked={row.getIsSelected()}
                onChange={(value) => {
                  if (!selectMultipleRows) {
                    table.toggleAllRowsSelected(false);
                  }
                  row.toggleSelected(value.currentTarget.checked);
                }}
                aria-label='Select row'
              />
            ),
          enableSorting: false,
          enableHiding: false,
        },
        ...columns,
      ]
    : columns;
  const table = useReactTable({
    data,
    columns: tableColumns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: pageSize,
      },
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });
  return (
    <div className={TableTheme[variant].wrapper}>
      {(columnsView || searchBy || facetedFilterBy) && (
        <ToolBar
          columnsView={columnsView}
          table={table}
          searchBy={searchBy}
          facetedFilterBy={facetedFilterBy}
          options={options}
        />
      )}
      <div className='relative'>
        {isLoading && (
          <div
            className='absolute inset-0 z-50 flex items-center justify-center bg-white/60'
            data-testid='table_loader'
          >
            <Icon id='loader' className='h-7 w-7 animate-spin' />
          </div>
        )}
        <div
          className={clsx(
            shouldShowScrollIndice && TableTheme[variant].table.scrollIndice,
          )}
        >
          <div
            ref={tableWrapperRef}
            className={TableTheme[variant].table.wrapper}
          >
            <table ref={tableRef} className='w-full'>
              <thead className={TableTheme[variant].table.thead.base}>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <th
                          key={header.id}
                          className={clsx(
                            TableTheme[variant].table.thead.th.base,
                            header.column.getCanSort() && 'cursor-pointer',
                          )}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          <span className='my-auto'>
                            {!header.column.getCanSort() ? (
                              <>
                                {header.isPlaceholder
                                  ? null
                                  : flexRender(
                                      header.column.columnDef.header,
                                      header.getContext(),
                                    )}
                              </>
                            ) : (
                              <div className='flex items-center'>
                                {{
                                  asc: (
                                    <Icon
                                      id={
                                        TableTheme[variant].table.thead.th.icons
                                          .asc
                                      }
                                      className={
                                        TableTheme[variant].table.thead.th.icon
                                      }
                                    />
                                  ),
                                  desc: (
                                    <Icon
                                      id={
                                        TableTheme[variant].table.thead.th.icons
                                          .desc
                                      }
                                      className={
                                        TableTheme[variant].table.thead.th.icon
                                      }
                                    />
                                  ),
                                }[header.column.getIsSorted() as string] ?? (
                                  <Icon
                                    id={
                                      TableTheme[variant].table.thead.th.icons
                                        .notSorted
                                    }
                                    className={
                                      TableTheme[variant].table.thead.th.icon
                                    }
                                  />
                                )}
                                {header.isPlaceholder
                                  ? null
                                  : flexRender(
                                      header.column.columnDef.header,
                                      header.getContext(),
                                    )}
                              </div>
                            )}
                          </span>
                        </th>
                      );
                    })}
                  </tr>
                ))}
              </thead>
              <tbody className={TableTheme[variant].table.tbody.base}>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <tr
                      key={row.id}
                      data-state={row.getIsSelected() && 'selected'}
                      className={TableTheme[variant].table.tbody.tr.base}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className={TableTheme[variant].table.tbody.tr.td}
                        >
                          <span className='my-auto'>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={selectRows ? columns.length + 1 : columns.length}
                      className={TableTheme[variant].table.tbody.tr.tdEmpty}
                    >
                      No results.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        {showFooter && (
          <TableFooter
            perPageOptions={perPageOptions}
            table={table}
            variant={variant}
            currentPage={currentPage}
            totalPages={totalPages}
            onLinePerPageChange={onLinePerPageChange}
            onFirstPage={onFirstPage}
            onLastPage={onLastPage}
            onNextPage={onNextPage}
            onPrevPage={onPrevPage}
            disableFooterButtons={disableFooterButtons}
            hidePerPageView={hidePerPageView}
          />
        )}
      </div>
    </div>
  );
};

export const Table = React.forwardRef(TableInner) as <TData, TValue>(
  props: DataTableProps<TData, TValue> & {
    /**
     *
     */
    ref?: Ref<unknown> | undefined;
  },
) => JSX.Element;
