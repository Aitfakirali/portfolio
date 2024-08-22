export const dropdown = {
  base: 'relative inline-block z-[2] w-full max-w-48',
  button: {
    base: 'flex w-full items-center gap-2 justify-between',
    active: 'text-primary-500',
  },
  placeholder: 'text-gray-700 w-max',
  label: 'text-primary-800',
  container:
    'relative md:absolute left-0 mt-4 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
  item: {
    base: 'group flex justify-between w-full items-center rounded-md px-5 py-3',
    active: 'text-primary-500 bg-gray-50',
    inactive: 'text-gray-900',
  },
  variants: {
    base: '',
    select: 'border border-gray-300 py-2 px-2 rounded',
  },
  icon: 'text-primary-500 h-5 w-5',
};
