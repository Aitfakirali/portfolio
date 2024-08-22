export const theme = {
  default: {
    wrapper: {
      base: 'box-border relative w-full flex gap-x-3 rounded-lg border p-4 hover:border-primary-400 items-center',
      checked: 'border-2 bg-primary-25 border-primary-500 text-primary-500',
      unchecked: 'bg-white border-gray-300',
      disabled: 'hover:border-gray-300 cursor-not-allowed',
      disabledChecked:
        'border-2 border-gray-300 bg-gray-50 hover:border-gray-300 cursor-not-allowed',
    },
    icon: {
      base: 'relative h-6 w-6 self-start',
      checked: 'text-primary-500',
      unchecked: 'text-gray-600',
      disabled: 'text-gray-400',
    },
    label: {
      checked: 'text-primary-500',
      unchecked: 'text-gray-600',
      disabled: 'text-gray-400',
    },
    description: {
      checked: 'text-primary-500',
      unchecked: 'text-gray-600',
      disabled: 'text-gray-400',
    },
    error: 'border-error-500 hover:border-error-500 focus:border-error-600',
  },
};
