export const theme = {
  default: {
    wrapper: {
      base: 'flex transform duration-150 flex-row md:flex-col border-2 border-gray-300 w-full min-w-[200px] max-w-full items-center justify-center shadow-base gap-3 rounded-md border-2 p-4 hover:border-primary-400 h-full md:text-center text-primary-700 w-full relative',
      checked: 'border-primary-500 shadow-lg',
      unchecked: 'bg-primary-25 border-primary-400 border scale-y-95',
      disabled: 'opacity-50 cursor-not-allowed !border-gray-100 opacity-30',
      recommanded: 'bg-procedure-mobile md:bg-procedure',
    },
    imageWrapper:
      'min-w-[70px] min-h-[70px] relative flex items-center justify-center grow',
    badgeWrapper:
      'md:absolute md:-top-3 md:left-0 flex md:w-full justify-center',
    icon: {
      base: 'relative h-6 w-6',
      checked: 'text-primary-500',
      unchecked: 'text-gray-600',
    },
    label: {
      base: 'items-center text-primary-500 font-semibold',
      checked: 'text-primary-500',
      unchecked: 'text-primary-500',
    },
    error: 'border-error-500 hover:border-error-500',
    btn: {
      base: 'hidden md:flex self-center items-center invisible bg-primary-50 text-primary-500 p-2 mt-auto hover:bg-primary-50 focus:bg-primary-50',
      checked: 'text-primary-500 visible',
      unchecked: '',
    },
  },
};
