import { Table } from '@tanstack/react-table';

import { TableTheme } from './theme';
import { Button } from '../button/Button';
import { Select } from '../form-elements/select/Select';
interface TableFooterProps<TData> {
  /**
   *
   */
  table: Table<TData>;
  /**
   *
   */
  perPageOptions?: number[];
  /**
   *
   */
  variant?: keyof typeof TableTheme;
  /**
   *
   */
  totalPages?: number;
  /**
   *
   */
  currentPage?: number;
  /**
   *
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
     *
     */
    first?: boolean;
    /**
     *
     */
    last?: boolean;
    /**
     *
     */
    next?: boolean;
    /**
     *
     */
    previous?: boolean;
  };
  /**
   *
   */
  hidePerPageView?: boolean;
}

/**
 *
 */
export function TableFooter<TData>({
  table,
  perPageOptions = [10, 20, 30, 40, 50],
  variant = 'default',
  totalPages,
  currentPage,
  disableFooterButtons,
  onLinePerPageChange,
  onFirstPage,
  onLastPage,
  onNextPage,
  onPrevPage,
  hidePerPageView,
}: TableFooterProps<TData>) {
  return (
    <div className={TableTheme[variant].footer.wrapper}>
      {hidePerPageView && (
        <div className={TableTheme[variant].footer.base}>
          <p className='text-sm font-medium'>Ligne par page</p>
          <div className='w-18'>
            <Select
              items={perPageOptions.map((option) => ({
                label: `${option}`,
                value: `${option}`,
              }))}
              value={`${table.getState().pagination.pageSize}`}
              onChange={(e) => {
                if (onLinePerPageChange) {
                  onLinePerPageChange(e);
                } else {
                  if (e) table.setPageSize(+e);
                }
              }}
            />
          </div>
        </div>
      )}
      <div className={TableTheme[variant].footer.pagerText}>
        Page {currentPage || table.getState().pagination.pageIndex + 1} sur{' '}
        {totalPages || table.getPageCount()}
      </div>
      <div className={TableTheme[variant].footer.base}>
        <Button
          variant={TableTheme[variant].footer.buttonVariant}
          iconLeft={TableTheme[variant].footer.firstPageIcon}
          onClick={() => {
            table.setPageIndex(0);
            onFirstPage && onFirstPage();
          }}
          disabled={
            typeof disableFooterButtons?.first === 'boolean'
              ? !disableFooterButtons?.first
              : !table.getCanPreviousPage()
          }
        ></Button>
        <Button
          variant={TableTheme[variant].footer.buttonVariant}
          iconLeft={TableTheme[variant].footer.prevPageIcon}
          onClick={() => {
            table.previousPage();
            onPrevPage && onPrevPage();
          }}
          disabled={
            typeof disableFooterButtons?.previous === 'boolean'
              ? !disableFooterButtons?.previous
              : !table.getCanPreviousPage()
          }
        ></Button>
        <Button
          variant={TableTheme[variant].footer.buttonVariant}
          iconLeft={TableTheme[variant].footer.nextPageIcon}
          onClick={() => {
            table.nextPage();
            onNextPage && onNextPage();
          }}
          disabled={
            typeof disableFooterButtons?.next === 'boolean'
              ? !disableFooterButtons?.next
              : !table.getCanNextPage()
          }
        ></Button>
        <Button
          variant={TableTheme[variant].footer.buttonVariant}
          iconLeft={TableTheme[variant].footer.lastPageIcon}
          onClick={() => {
            table.setPageIndex(table.getPageCount() - 1);
            onLastPage && onLastPage();
          }}
          disabled={
            typeof disableFooterButtons?.last === 'boolean'
              ? !disableFooterButtons?.last
              : !table.getCanNextPage()
          }
        ></Button>
      </div>
    </div>
  );
}
