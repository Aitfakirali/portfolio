export const theme = {
  default: {
    wrapper: {
      base: 'p-4 rounded-lg border-gray-300 border flex gap-3 items-center',
      checked: 'border-primary-400 border-2 shadow-md',
      hasError: 'border-error-500 border-2',
    },
    section: 'flex-1 space-y-2 text-gray-600',
    btn: {
      base: 'hidden justify-self-end md:block',
      checked: 'text-primary-500 visible',
      unchecked: '',
    },
    text: {
      checked: 'text-primary-500',
    },
  },
};
