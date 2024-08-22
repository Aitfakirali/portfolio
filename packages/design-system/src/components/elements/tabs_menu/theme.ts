export const tabsTheme = {
  default: {
    wrapper: 'flex w-full rounded-lg bg-white px-3 shadow overflow-x-auto',
    tab: {
      base: 'group min-w-max relative flex min-h-full cursor-pointer items-center gap-3 overflow-hidden px-3 text-gray-500 after:absolute after:left-0 after:h-2 after:w-full after:rounded after:transition-all after:content-[""]',
      active:
        'text-primary-500 after:bg-primary-500 bg-primary-50 pb-[15px] pt-[13px] after:-bottom-1',
      disabled:
        'after:bg-primary-300 pb-4 pt-3.5 after:-bottom-2 hover:text-gray-700 hover:after:-bottom-1',
      number: {
        base: 'rounded-full px-2 py-0.5',
        active: 'bg-primary-200',
        disabled:
          'group-hover:bg-primary-200 group-hover:text-primary-500 bg-gray-100',
      },
    },
  },
  table: {
    wrapper: 'flex w-full rounded-t-lg bg-white px-3 shadow overflow-x-auto',
    tab: {
      base: 'group min-w-max relative flex min-h-full cursor-pointer items-center gap-3 overflow-hidden px-3 text-gray-500 after:absolute after:left-0 after:h-2 after:w-full after:rounded after:transition-all after:content-[""]',
      active:
        'text-primary-500 after:bg-primary-500 pb-[15px] pt-[13px] after:-bottom-1',
      disabled:
        'after:bg-primary-300 pb-4 pt-3.5 after:-bottom-2 hover:text-gray-700 hover:after:-bottom-1',
      number: {
        base: 'rounded-full px-2 py-0.5',
        active: 'bg-primary-200',
        disabled:
          'group-hover:bg-primary-200 group-hover:text-primary-500 bg-gray-100',
      },
    },
  },
};
