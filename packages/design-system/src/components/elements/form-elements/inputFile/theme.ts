export const theme = {
  default: {
    selectedElements: 'mt-6 flex flex-col gap-y-2',
    selectedElement: {
      base: 'flex items-center justify-between rounded-lg border p-4 bg-white',
      state: {
        new: 'border-primary-300',
        default: 'border-gray-300',
      },
      content: {
        wrapper: 'flex flex-wrap items-center gap-2',
        type: {
          wrapper:
            'relative flex h-8 w-8 items-center justify-center rounded border border-gray-200',
          icon: 'text-primary-500 absolute inset-0 z-0 m-auto h-4 w-4',
        },
        name: 'text-gray-600',
      },
      actions: {
        wrapper: 'flex items-center space-x-2 ml-2',
        icons: 'h-4 w-4',
        deleteButton:
          'border-error-400 p-2 text-error-400 hover:border-error-500 hover:text-error-500 focus:text-error-500 focus:border-error-500',
      },
    },
  },
};
