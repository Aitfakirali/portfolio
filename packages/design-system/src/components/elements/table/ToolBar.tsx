import { Column, Table } from '@tanstack/react-table';
import React from 'react';

import { OptionsType } from './Table';
import { TableDropDown } from './TableDropDown';
import { TableTheme } from './theme';
import { Input } from '../form-elements/input/Input';

/**
 *
 */
interface ToolBarProps<TData> {
  /**
   *
   */
  table: Table<TData>;
  /**
   *
   */
  searchBy?: string;
  /**
   *
   */
  facetedFilterBy?: string;
  /**
   *
   */
  options?: OptionsType;
  /**
   *
   */
  columnsView: boolean;
  /**
   *
   */
  variant?: keyof typeof TableTheme;
}

/**
 *
 */
export function ToolBar<TData>({
  table,
  searchBy,
  facetedFilterBy,
  options,
  columnsView,
  variant = 'default',
}: ToolBarProps<TData>) {
  const columns: {
    [key: string]: Column<TData, unknown> | undefined;
  } = {};
  facetedFilterBy?.split(',').map((filterBy: string) => {
    columns[filterBy] = table.getColumn(filterBy);
  });

  const facets: {
    [key: string]: Map<string, number> | undefined;
  } = {};
  facetedFilterBy?.split(',').map((filterBy: string) => {
    facets[filterBy] = columns[filterBy]?.getFacetedUniqueValues();
  });

  const selectedValues: {
    [key: string]: Set<string>;
  } = {};
  facetedFilterBy?.split(',').map((filterBy: string) => {
    selectedValues[filterBy] = new Set(
      columns[filterBy]?.getFilterValue() as string[],
    );
  });

  /**
   *
   */
  const clear = (filterBy: string) => {
    selectedValues[filterBy].clear();
    columns[filterBy]?.setFilterValue(undefined);
  };

  return (
    <div className={TableTheme[variant].toolbar.wrapper}>
      <div className='flex flex-wrap items-center gap-4'>
        {searchBy && (
          <div className='md:w-36 lg:w-64'>
            <Input
              placeholder={`Filter ${searchBy}...`}
              value={
                (table.getColumn(searchBy)?.getFilterValue() as string) ?? ''
              }
              onChange={(event: any) =>
                table.getColumn(searchBy)?.setFilterValue(event.target.value)
              }
            />
          </div>
        )}

        {facetedFilterBy?.split(',').map((filterBy: string) => (
          <React.Fragment key={filterBy}>
            {options?.[filterBy] && (
              <TableDropDown
                title={filterBy}
                icon='add-square'
                variant={variant}
                dropdownVariant='default'
                options={options[filterBy]}
                facets={facets[filterBy]}
                selectedValues={selectedValues[filterBy]}
                onClick={(option) => {
                  const isSelected = selectedValues[filterBy].has(option.value);
                  if (isSelected) {
                    selectedValues[filterBy].delete(option.value);
                  } else {
                    selectedValues[filterBy].add(option.value);
                  }
                  const filterValues = Array.from(selectedValues[filterBy]);
                  columns[filterBy]?.setFilterValue(
                    filterValues.length ? filterValues : undefined,
                  );
                }}
                clear={() => clear(filterBy)}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {columnsView && (
        <TableDropDown
          title='View'
          icon='setting-5'
          dropdownVariant='secondary'
          variant={variant}
          options={table
            .getAllColumns()
            .filter(
              (column) =>
                typeof column.accessorFn !== 'undefined' && column.getCanHide(),
            )}
          onClick={(column) => column.toggleVisibility(!column.getIsVisible())}
        />
      )}
    </div>
  );
}
