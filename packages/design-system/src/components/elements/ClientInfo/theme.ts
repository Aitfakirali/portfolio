export const themeClientCard = {
  default: {
    card: {
      container:
        'relative mx-px grid grid-cols-1 justify-center rounded-lg bg-gray-100 p-4 overflow-y-auto max-w-[250px] overflow-auto',
      header:
        'absolute flex py-2 w-full flex-row items-center justify-center rounded-t-lg bg-blue-50 ',
      title: 'text-primary-600 flex items-center justify-center space-x-2',
      iconeTitle: 'w-4 h-4',
      body: 'relative flex h-auto flex-col justify-items-start mt-8 pt-2 pb-2',
    },
    element: {
      container: 'flex flex-col overflow-y-auto ',
      title: 'text-primary-500 uppercase mb-4',
      block: 'flex flex-row items-start space-x-2 mb-4',
      icone: 'text-gold-500 mt-1 flex-shrink-0  w-4 h-4',
      miniTitle: 'text-primary-600 ',
      item: 'text-gray-700 pb-1 ',
    },
    dialog: {
      card: ' grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 max-w-fit',
      container: 'max-h-[90vh] rounded-lg bg-white p-4 overflow-auto',
      body: 'rounded-lg bg-white py-12 shadow-lg w-7/14 px-4 overflow-auto',
    },
  },
};
