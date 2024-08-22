// paragraph_accordion
export const accordion = {
  default: {
    container: 'mx-auto w-full space-y-2 rounded-2xl',
    disclosure: 'space-y-1',
    button: {
      base: 'w-full space-y-2 rounded-lg px-4 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-gray-300 focus-visible:ring-opacity-75',
      icon: {
        base: 'transition ease-in duration-300',
        inactiveId: 'plus',
        activeId: 'minus',
        width: '16',
        height: '16',
      },
    },
    panel: {
      wrapper: {
        enter: 'transition-all duration-100 ease-out',
        enterFrom: 'transform scale-95 opacity-0',
        enterTo: 'transform scale-100 opacity-100 z-10 relative',
        leave: 'transition-all duration-100 ease-out',
        leaveFrom: 'transform scale-100 opacity-100 z-10 relative',
        leaveTo: 'transform scale-95 opacity-0',
      },
      base: 'px-4 pb-2',
    },
  },
  withBorder: {
    container: 'mx-auto w-full space-y-3 rounded-2xl',
    disclosure: 'space-y-1 border border-gray-200 rounded-lg',
    button: {
      base: 'w-full space-y-2 p-4 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-gray-300 focus-visible:ring-opacity-75',
    },
    panel: {
      wrapper: {
        enter: 'transition-all duration-100 ease-out',
        enterFrom: 'transform scale-95 opacity-0',
        enterTo: 'transform scale-100 opacity-100 z-10 relative',
        leave: 'transition-all duration-100 ease-out',
        leaveFrom: 'transform scale-100 opacity-100 z-10 relative',
        leaveTo: 'transform scale-95 opacity-0',
      },
      base: 'px-4 pb-2',
    },
  },
};
