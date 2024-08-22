export const theme = {
  default: {
    wrapper: {
      base: 'max-w-fit p-4 flex flex-col items-center gap-3 rounded-md p-4 text-center text-primary-700 w-full relative',
      disabled: 'opacity-50 cursor-not-allowed !border-gray-300',
    },
    imageWrapper:
      'after:aspect-1 after:bg-primary-50 relative w-32 h-32 flex items-center justify-center after:absolute after:left-0 after:top-0 after:w-full after:rounded-full after:content-[""]',
    imageStyle: 'relative z-10 h-full w-full ',
    inputWrapper: 'mx-auto flex flex-col max-w-xs my-5',
    icon: 'text-gold h-5 w-5 cursor-pointer',
    buttonWrapper: 'flex items-center space-x-6 justify-center pt-5',
    buttonStyle: 'inline-flex items-center gap-2 py-2',
    label: {
      base: 'items-center text-primary-500 font-semibold',
      checked: 'text-primary-500',
      unchecked: 'text-primary-500',
    },
    error: 'border-error-500 hover:border-error-500',
    btn: {
      base: 'flex items-center bg-primary-50 text-primary-500 text-base/Semibold p-2 mt-auto hover:bg-primary-50 focus:bg-primary-50',
      checked: 'text-primary-500',
      unchecked: 'text-gray-600',
    },
  },
};
