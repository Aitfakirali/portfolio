export const toggle = {
  default: {
    wrapper:
      'flex w-full flex-grow items-center justify-between gap-x-9 bg-gray-100 px-[16px] py-[8px] rounded-lg',
    label: {
      enabled: 'text-gray-600',
      disabled: 'text-gray-400',
    },
  },
  transparent: {
    wrapper:
      'flex w-full flex-grow items-center justify-between gap-x-9 bg-transparent px-[16px] py-[8px] rounded-lg',
    label: {
      enabled: 'text-gray-600',
      disabled: 'text-gray-400',
    },
  },
};
