export const theme = {
  wrapper: {
    base: "absolute cursor-pointer px-[12px] py-[6px] rounded-[3px] after:content-[''] after:rounded-[3px] after:absolute after:transform after:w-3 after:h-3 after:rotate-45",
    unchecked: 'after:bg-primary-100 bg-primary-100 text-primary-500',
    checked: 'after:bg-primary-500 bg-primary-500 text-white',
    error: 'after:!bg-error-500 !bg-error-500 text-white',
  },
  position: {
    topCenter:
      'top-5 left-1/2 transform -translate-x-1/2 rtl:translate-x-1/2 mb-3 after:-translate-x-1/2 after:left-1/2 after:-bottom-1 md:-rotate-90 md:after:left-0.5 md:after:top-1/2 md:after:-translate-y-1/2',
    topLeft:
      'top-24 left-0 mb-3 after:-translate-y-1/2 after:top-1/2 after:-right-1 md:-rotate-90 md:after:top-full md:after:left-1/2 md:after:-translate-x-1/2',
    topRight:
      'top-24 right-0 mb-3 after:-translate-y-1/2 after:top-1/2 after:-left-1 md:-rotate-90 md:after:top-0 md:after:left-1/2 md:after:-translate-x-1/2',

    bottomCenter:
      'bottom-5 left-1/2 transform -translate-x-1/2 rtl:translate-x-1/2 mt-3 after:-translate-x-1/2 after:left-1/2 after:-top-1 md:-rotate-90 md:after:left-full md:after:top-1/2 md:after:-translate-y-1/2',
    bottomLeft:
      'bottom-24 left-0 mt-3 after:-translate-y-1/2 after:top-1/2 after:-right-1 md:-rotate-90 md:after:top-full md:after:right-1/2 md:after:translate-x-1/2',
    bottomRight:
      'bottom-24 right-0 mt-3 after:-translate-y-1/2 after:top-1/2 after:-left-1 md:-rotate-90 md:after:top-0 md:after:left-1/2 md:after:-translate-x-1/2',

    leftCenter:
      'left-0  bottom-1/2 transform translate-y-1/2 after:-translate-y-1/2 after:top-1/2 after:-right-1 md:-rotate-90 md:after:top-full md:after:left-1/2 md:after:-translate-x-1/2',

    rightCenter:
      'right-0 bottom-1/2 transform translate-y-1/2 after:-translate-y-1/2 after:top-1/2 after:-left-1 md:-rotate-90 md:after:top-0 md:after:left-1/2 md:after:-translate-x-1/2',
  },
};
