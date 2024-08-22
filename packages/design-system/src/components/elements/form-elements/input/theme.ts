export const input = {
  default: {
    container: 'relative w-full',
    wrapper: {
      base: 'relative bg-white flex flex-grow items-center px-3 py-2 w-full rounded shadow-base',
      enabled:
        'border border-gray-300 hover:border-primary-300 focus-within:!border-primary-500',
      disabled: 'bg-gray-50 border border-gray-300',
    },
    label: 'inline-block text-sm font-medium text-gray-700 mb-1',
    input:
      'text-base font-medium text-gray-800 leading-[20px] w-full bg-transparent appearance-none placeholder-gray-400 placeholder-text-sm outline-none border-none focus:ring-0 p-0',
    prefix: 'mr-1 text-gray-500',
    sufix: 'ml-1 text-gray-500',
    errorMessage: 'text-error-500 mt-1',
    hasError:
      '!border-red-500 hover:border-red-600 focus-within:!border-red-400',
    description: 'text-gray-500 mt-1',
  },
};
