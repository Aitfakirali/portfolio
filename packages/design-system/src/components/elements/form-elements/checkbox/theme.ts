export const checkbox = {
  default: {
    wrapper: ' flex gap-x-2 items-center',
    checkbox: {
      base: 'relative flex h-5 w-5 items-center justify-center rounded grow shrink-0',
      enabled: {
        checked: 'bg-primary-500 text-white',
        unchecked:
          'bg-white border border-gray-400 hover:bg-gray-100 hover:border-primary-500 focus-within:border-primary-500',
      },
      disabled: {
        checked:
          'bg-gray-100 border border-gray-300 text-gray-400 cursor-not-allowed',
        unchecked:
          'bg-gray-100 border border-gray-300 text-gray-400 cursor-not-allowed',
      },
      error: 'border-error-500',
      label: {
        base: 'text-black',
        checked: 'text-primary-500',
        disabled: 'text-gray-300',
      },
    },
    errorMessage: 'text-sm text-red-500',
  },
  aligned: {
    wrapper: ' flex gap-x-2 items-start',
    checkbox: {
      base: 'relative flex h-5 w-5 items-center justify-center rounded grow shrink-0',
      enabled: {
        checked: 'bg-primary-500 text-white',
        unchecked:
          'bg-white border border-gray-400 hover:bg-gray-100 hover:border-primary-500 focus-within:border-primary-500',
      },
      disabled: {
        checked:
          'bg-gray-100 border border-gray-300 text-gray-400 cursor-not-allowed',
        unchecked:
          'bg-gray-100 border border-gray-300 text-gray-400 cursor-not-allowed',
      },
      error: 'border-error-500',
      label: {
        base: 'text-black',
        checked: 'text-primary-500',
        disabled: 'text-gray-300',
      },
    },
    errorMessage: 'text-sm text-red-500',
  },
};
