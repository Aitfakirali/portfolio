export const button = {
  base: 'relative w-fit box-border flex items-center justify-center focus:outline-none transition ease-in-out duration-300 gap-[10px] rounded',
  contentWrapper: 'flex items-center justify-center gap-x-2',
  disabled: {
    base: 'cursor-not-allowed ',
    primary: 'bg-gray-100 text-gray-400 hover:bg-gray-100 hover:text-gray-400',
    secondary:
      'bg-gray-100 text-gray-400 hover:bg-gray-100 hover:text-gray-400',
    outline:
      'border border-gray-300 text-gray-300 hover:border-gray-300 hover:text-gray-300',
    text: 'text-gray-400 hover:text-gray-400',
    green: 'bg-gray-100 text-gray-400 hover:bg-gray-100 hover:text-gray-400',
  },
  size: {
    normal: {
      text: 'py-2 px-4',
      icon: 'p-2',
    },
    medium: {
      text: 'py-1 px-3',
      icon: 'p-1',
    },
  },
  variants: {
    primary: 'bg-primary text-white hover:bg-primary-400 focus:bg-primary-600',
    secondary:
      'bg-primary-25 text-primary hover:bg-primary-100 hover:text-primary-500 focus:bg-primary-300 dark:bg-primary/20',
    outline:
      'border border-primary text-primary hover:border-primary-400 hover:text-primary-400 focus:border-primary-600 focus:text-primary-600',
    text: 'text-primary hover:bg-gray-50 focus:bg-transparent',
    green: 'bg-green text-white hover:bg-green-400 focus:bg-green-600',
  },
};
