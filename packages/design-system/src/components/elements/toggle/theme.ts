export const toggle = {
  default: {
    switch: {
      className:
        'relative inline-flex items-center h-[30px] rounded-full w-[50px]',
      enabled: 'bg-success-600',
      disabled: 'bg-gray-300',
      span: {
        enabled: 'translate-x-[21px] rtl:-translate-x-[21px]',
        disabled: 'translate-x-px rtl:-translate-x-px',
        className:
          'inline-block w-[28px] h-[28px] transform bg-white rounded-full',
      },
    },
  },
};
