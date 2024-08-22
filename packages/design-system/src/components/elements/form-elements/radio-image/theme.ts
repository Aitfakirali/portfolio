export const theme = {
  default: {
    wrapper: {
      base: 'relative cursor-pointer overflow-hidden flex flex-col items-center p-4 min-h-[277px] min-w-[343px] border-4 rounded-3xl ease-in transition-all duration-300',
      checked:
        'bg-[#F2F6F1] shadow-[0px_8px_8px_rgba(116,_169,_50,_0.2)] border-[rgba(116,_169,_50,_0.6)] hover:border-[rgba(168,_188,_197,_0.4)] hover:bg-[#EFF8FF]',
      unchecked:
        'bg-[#EFF8FF] border-[rgba(168,_188,_197,_0.4)] hover:border-[rgba(116,_169,_50,_0.6)] hover:bg-[#F2F6F1]',
      disabled:
        'opacity-50 cursor-not-allowed !border-gray-100 filter grayscale',
    },
    imageWrapper: 'absolute top-0 left-0 w-full h-full z-[1]',
    icon: {
      base: 'relative h-6 w-6',
      checked: '',
      unchecked: '',
    },
    label: {
      base: '',
      checked: '',
      unchecked: '',
    },
    legend: {
      base: 'absolute bottom-3 left-4 z-[2] text-xs leading-[15px] font-medium',
      checked: '',
      unchecked: '',
      disabled: '',
      hasError: '',
    },
    error: '',
    btn: {
      base: 'mt-auto relative z-[2]',
      checked: '',
      unchecked: '',
    },
  },
};
