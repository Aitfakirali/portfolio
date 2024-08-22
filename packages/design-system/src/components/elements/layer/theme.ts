export const layer = {
  default: {
    btnClose: {
      style:
        'absolute top-4 right-0 mr-4 rtl:right-auto rtl:left-4 text-primary-500 hover:opacity-50 transition-all ease-in duration-300',
      icon: {
        id: 'close',
        width: '24',
        height: '24',
      },
    },
    'top-left': {
      position: 'top-4 left-4',
      animation: {
        enter: 'transition-all duration-500',
        enterFrom: '-translate-x-[100%] opacity-0 rtl:translate-x-[100%]',
        enterTo: 'translate-x-0 opacity-1',
        leave: 'transition-all duration-500',
        leaveFrom: 'translate-x-0 opacity-1',
        leaveTo: '-translate-x-[100%] opacity-0 rtl:translate-x-[100%]',
      },
    },
    'bottom-left': {
      position: 'bottom-4 left-4',
      animation: {
        enter: 'transition-all duration-500',
        enterFrom: 'ltr:-translate-x-[100%] rtl:translate-x-[100%] opacity-0',
        enterTo: 'translate-x-0 opacity-1',
        leave: 'transition-all duration-500',
        leaveFrom: 'translate-x-0 opacity-1',
        leaveTo: 'ltr:-translate-x-[100%] rtl:translate-x-[100%] opacity-0',
      },
    },
    'top-right': {
      position: 'top-0 right-0',
      animation: {
        enter: 'transition-all duration-500',
        enterFrom: 'translate-x-[100%] opacity-1 rtl:-translate-x-[100%]',
        enterTo: 'translate-x-0 opacity-1',
        leave: 'transition-all duration-500',
        leaveFrom: 'translate-x-0 opacity-1',
        leaveTo: 'translate-x-[100%] opacity-1 rtl:-translate-x-[100%]',
      },
    },
    'bottom-right': {
      position: 'bottom-4 right-4',
      animation: {
        enter: 'transition-all duration-500',
        enterFrom: 'translate-x-[100%] opacity-1 rtl:-translate-x-[100%]',
        enterTo: 'translate-x-0 opacity-1',
        leave: 'transition-all duration-500',
        leaveFrom: 'translate-x-0 opacity-1',
        leaveTo: 'translate-x-[100%] opacity-1 rtl:-translate-x-[100%]',
      },
    },
    'top-center': {
      position: 'top-3 -translate-x-1/2 rtl:translate-x-1/2 left-1/2',
      animation: {
        enter: 'transition-all duration-500',
        enterFrom: '-translate-y-[100%] opacity-0',
        enterTo: 'translate-y-0 opacity-1',
        leave: 'transition-all duration-500',
        leaveFrom: '-translate-y-0 opacity-1',
        leaveTo: '-translate-y-[100%] opacity-0',
      },
    },
    'bottom-center': {
      position: 'bottom-3 -translate-x-1/2 rtl:translate-x-1/2 left-1/2',
      animation: {
        enter: 'transition-all duration-500',
        enterFrom: 'translate-y-[100%] opacity-0',
        enterTo: 'translate-y-0 opacity-1',
        leave: 'transition-all duration-500',
        leaveFrom: '-translate-y-0 opacity-1',
        leaveTo: 'translate-y-[100%] opacity-0',
      },
    },
    modal: {
      position:
        'fixed z-[999999999] w-11/12 left-1/2 top-1/2 transform -translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2',
      animation: {
        enter: 'transition-all duration-500',
        enterFrom: 'translate-y-40 opacity-0 scale-0',
        enterTo: 'opacity-1 scale-1',
        leave: 'transition-all duration-500',
        leaveFrom: 'translate-y-0 opacity-1 scale-1',
        leaveTo: 'opacity-0 scale-0',
      },
    },
    sidebar: {
      position: 'top-0 left-0 rtl:right-0',
      animation: {
        enter: 'transition-all duration-500',
        enterFrom: '-translate-x-full rtl:translate-x-full opacity-0',
        enterTo: 'opacity-1',
        leave: 'transition-all duration-500',
        leaveFrom: 'opacity-1',
        leaveTo: '-translate-x-full rtl:translate-x-full opacity-0',
      },
    },
    overlay: {
      animation: {
        enter: 'transition-all duration-500',
        enterFrom: 'opacity-0',
        enterTo: 'opacity-1',
        leave: 'transition-all duration-500',
        leaveFrom: 'opacity-1',
        leaveTo: 'opacity-0',
      },
    },
  },
};
