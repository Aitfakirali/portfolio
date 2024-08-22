export const TableTheme = {
  default: {
    wrapper: 'overflow-x-hidden',
    toolbar: {
      base: {
        default:
          'border-primary-500 text-primary-500 flex items-center rounded border bg-transparent !px-4 !py-2 text-md',
        secondary:
          'text-primary-500 flex items-center rounded bg-primary-50 !px-4 !py-2 text-md',
      },
      wrapper: 'flex flex-wrap items-center justify-between gap-4 p-4',
      dropdown: {
        button: {
          icon: 'mr-2 h-4 w-4',
          badgeWrapper:
            'ml-2 flex items-center gap-2 border-l border-gray-300 pl-2',
          clearButton: {
            base: 'text-primary-500 bg-primary-50 flex h-4 w-4 items-center rounded-full text-xs',
            icon: 'h-3.5 w-3.5 min-w-full',
          },
        },
        menu: {
          base: 'absolute z-50 right-0 mt-2 min-w-fit overflow-hidden bg-white shadow-lg focus:outline-none',
          item: 'text-md flex cursor-pointer items-center justify-between gap-4 px-4 py-2 text-gray-600 hover:bg-gray-50',
        },
      },
    },
    table: {
      wrapper: 'overflow-x-auto',
      scrollIndice:
        'relative before:content[""] before:absolute before:top-0 before:right-0 before:block before:w-8 before:h-full before:z-1 before:shadow-scrollIndice',
      thead: {
        base: 'text-primary-700 whitespace-nowrap bg-gray-50',
        th: {
          base: 'px-4 py-3 text-left text-base font-semibold',
          icon: 'mr-0.5 mt-0.5 h-4 w-4',
          icons: {
            asc: 'arrow-up-1',
            desc: 'arrow-down-1',
            notSorted: 'frame1',
          },
        },
      },
      tbody: {
        base: 'text-gray-600',
        tr: {
          base: 'border-b border-gray-200 hover:bg-gray-50',
          td: 'p-4 text-base font-normal',
          tdEmpty: 'h-24 text-center',
        },
      },
    },
    footer: {
      wrapper: 'flex flex-wrap justify-end gap-4 p-4',
      base: 'flex items-center space-x-2',
      pagerText: 'flex items-center justify-center text-sm font-medium',
      firstPageIcon: 'double-arrow-left',
      prevPageIcon: 'arrow-left',
      nextPageIcon: 'arrow-right',
      lastPageIcon: 'double-arrow-right',
      buttonVariant: 'outline' as const,
    },
  },
};
