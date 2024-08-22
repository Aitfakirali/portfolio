export const tooltip = {
  wrapper:
    "absolute bg-gray-700 after:bg-gray-700 text-white rounded-[3px] px-3 py-1.5 after:content-[''] after:rounded-[3px] after:absolute after:transform after:w-3 after:h-3 after:rotate-45",
  position: {
    topCenter:
      'bottom-full left-1/2 transform -translate-x-1/2 rtl:translate-x-1/2 mb-3 after:-translate-x-1/2 rtl:after:translate-x-1/2 after:left-1/2 after:-bottom-1',
    topLeft: 'bottom-full left-0 mb-3 after:left-3 after:-bottom-1',
    topRight: 'bottom-full right-0 mb-3 after:right-3 after:-bottom-1',

    bottomCenter:
      'top-full left-1/2 transform -translate-x-1/2 rtl:translate-x-1/2 mt-3 after:-translate-x-1/2 rtl:after:translate-x-1/2 after:left-1/2 after:-top-1',
    bottomLeft: 'top-full left-0 mt-3 after:left-3 after:-top-1',
    bottomRight: 'top-full right-0 mt-3 after:right-3 after:-top-1',

    leftCenter:
      'right-full  bottom-1/2 transform translate-y-1/2 mr-3 after:-translate-y-1/2 after:top-1/2 after:-right-1',
    leftTop: 'right-full top-0 mr-3 after:top-2 after:-right-1',
    leftBottom: 'right-full bottom-0 mr-3 after:bottom-2 after:-right-1',

    rightCenter:
      'left-full bottom-1/2 transform translate-y-1/2 ml-3 after:-translate-y-1/2 after:top-1/2 after:-left-1',
    rightTop: 'left-full top-0 ml-3 after:top-2 after:-left-1',
    rightBottom: 'left-full bottom-0 ml-3 after:bottom-2 after:-left-1',
  },
  animation: {
    enter: 'transition ease-out duration-100',
    enterFrom: 'transform opacity-0 scale-95',
    enterTo: 'transform opacity-100 scale-100',
    leave: 'transition ease-in duration-75',
    leaveFrom: 'transform opacity-100 scale-100',
    leaveTo: 'transform opacity-0 scale-95',
  },
};
