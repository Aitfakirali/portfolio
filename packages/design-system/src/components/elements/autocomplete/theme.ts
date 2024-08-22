export const autocomplete = {
  default: {
    wrapper: 'relative w-72',
    label: 'text-sm leading-5 mb-2',
    comboboxTrigger: {
      container:
        'h-11 flex justify-between px-3 relative w-full text-left bg-white rounded-lg border border-gray-300 cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-gray-300 focus-visible:ring-offset-2 sm:text-sm overflow-hidden',
      containerError: 'border border-red-500',
      input:
        'w-full border-none focus:ring-0 py-2 px-0 pr-4 text-sm leading-5 text-gray-900',
      button: 'absolute inset-y-0 right-0 flex items-center pr-3',
    },
    comboboxOptions: {
      container:
        'absolute z-50 w-full mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
      option: {
        default: 'cursor-pointer select-none relative py-2 pl-4 pr-10',
        state: {
          active: 'text-black bg-gray-100',
          inactive: 'text-gray-900',
          selected: 'text-black bg-gray-100',
          notselected: 'text-gray-900',
        },
        optionCheck: 'absolute inset-y-0 right-0 flex items-center pr-3',
      },
      transition: {
        leave: 'transition ease-in duration-100',
        leaveFrom: 'opacity-100',
        leaveTo: 'opacity-0',
      },
    },
  },
};
