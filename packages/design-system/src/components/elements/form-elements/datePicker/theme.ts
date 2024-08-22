export const theme = {
  default: {
    datePicker: {
      component: {
        body: 'p-1',
        day_disabled: 'text-muted-foreground opacity-25',
        head: 'text-sm font-normal text-gray-400',
        nav_button_previous: 'order-first',
        nav_button_next: 'order-last',
        button: 'm-0 ',
        day_hidden: 'text-muted-foreground opacity-25',
        caption: 'flex justify-center pt-1 relative items-center',
        day_today: '!text-primary-500 !text-base !font-medium ',
        day: ' h-8 w-9 hover:text-primary-500 aria-selected:text-base aria-selected:font-medium aria-selected:bg-primary-50 rounded hover:bg-primary-50',
        cell: 'text-base font-medium  text-gray-700',
        day_selected:
          'aria-selected:text-base aria-selected:font-medium aria-selected:text-primary-500 aria-selected:bg-primary-50 rounded  ',
        day_range_start:
          'aria-selected:text-base aria-selected:font-mediumaria-selected:text-primary-500 aria-selected:bg-primary-50 rounded-l ',
        day_range_middle:
          'aria-selected:text-base aria-selected:font-medium aria-selected:text-primary-500 aria-selected:bg-primary-50 ',
        day_range_end:
          'aria-selected:text-base aria-selected:font-medium aria-selected:text-primary-500 aria-selected:bg-primary-50 rounded-r',
        day_outside: 'text-muted-foreground opacity-50',
        month: 'text-sm font-normal hidden:text-gray-400',
        caption_label: 'text-md/Medium',
        day_hover:
          'aria-selected:text-base aria-selected:font-medium aria-selected:text-primary-500',
      },
      container:
        'absolute mt-2 z-10 flex items-center justify-center rounded-lg bg-white drop-shadow-md',
      error: 'text-error-500 mt-1',
    },

    customCaption: {
      container: 'flex items-center justify-between',
      buttonLeft: {
        container:
          'flex h-8 w-8 items-center justify-center  rounded-md border border-solid border-gray-300 cursor-pointer',
        icone: 'h-4 w-4 text-gray-600',
      },
      buttonRight: {
        container:
          'flex h-8 w-8 items-center justify-center rounded-md border border-solid border-gray-300 cursor-pointer',
        icone: 'h-4 w-4 text-gray-600',
      },
      displayDate: 'text-primary-800 text-center',
      dateRangefields: 'flex items-center justify-between w-11/12',
    },
    textInput: {
      suffixIcone: 'text-gold-500 h-4 w-4',
      DisabledsuffixIcone: 'text-gray-300 h-4 w-4 cursor-not-allowed',
      resetIcon: 'text-gold-500 h-5 w-5 cursor-pointer',
    },
    renderFooter: {
      container: 'mt-4 flex justify-end ',
      buttons: {
        cancel:
          'mr-2 rounded-md border text-primary-600 hover:bg-gray-100 focus:outline-none',
        cancelText: 'text-primary-500',
        confirm:
          'rounded-md border border-blue-500 bg-blue-500  text-white hover:bg-blue-600 focus:outline-none',
        confirmText: 'text-white',
      },
    },
  },
};
