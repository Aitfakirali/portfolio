export const radio = {
  default: {
    wrapper: 'flex gap-x-3',
    base: 'relative flex h-5 w-5 items-center justify-center rounded-full border cursor-pointer',
    enabled: {
      checked:
        'border-primary-500 bg-primary-500 hover:bg-primary-500 hover:border-primary-500',
      unchecked:
        'border-gray-400 bg-white hover:bg-primary-100 hover:border-primary-500',
    },
    disabled: {
      checked: 'border-gray-300 bg-gray-100  cursor-not-allowed',
      unchecked: 'border-gray-300 bg-gray-100 cursor-not-allowed',
    },
    icon: {
      base: 'h-2 w-2 rounded-full',
      enabled: 'bg-white',
      disabled: 'bg-gray-300',
    },
    error: 'border-error-500',
    label: {
      disabled: 'text-gray-300',
      unchecked: 'text-gray-700',
      checked: 'text-primary-500',
      error: 'text-error-500',
    },
  },
};
