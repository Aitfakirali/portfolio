export const theme = {
  default: {
    element: {
      button: {
        select:
          'cursor-default border border-gray-300 h-9 flex items-center justify-between w-full px-3 py-2 rounded  shadow bg-white focus:border-1 focus:border-primary-500 hover:border hover:border-primary-300 focus:ring-1 focus:ring-primary-500 hover:ring-primary-300 focus:outline-1 hover:outline-primary-500 focus:outline-primary-500 text-left',
        error:
          'ring-1 ring-error-400 border-1 border-error-400 outline-1 border-1 border-error-400',
        iconeError: 'text-error-500',
        disabled: 'bg-gray-50 text-gray-500 cursor-not-allowed ',
        label: 'text-primary-800',
        placeholder: 'text-gray-500',
      },
      field: {
        activated: 'bg-gray-50',
      },
      icone: {
        arrow: 'text-gold-500 w-4 h-4',
        checked: 'text-primary-500 w-5 h-5',
      },
      options: {
        selectedfont: 'flex items-center justify-between w-full ',
        container:
          'absolute top-0 bottom-0 mb-1 z-50 mt-1 max-h-60 w-full rounded bg-white py-1 text-base shadow  focus:outline-none',
        element:
          'w-full overflow-auto cursor-default h-9  select-none py-2 pl-3 pr-4 ',
        fontcolor: 'text-gray-700',
        available: 'cursor-pointer',
        unavailable: 'cursor-not-allowed text-opacity-25',
      },
      error: 'text-error-500 mt-1 relative',
    },
  },
};
