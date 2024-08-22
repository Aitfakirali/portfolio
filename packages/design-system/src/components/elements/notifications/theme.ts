export const notificationTheme = {
  wrapper:
    'flex items-center justify-between rounded-lg p-4 border md:min-w-[400px]',
  icon: 'h-[21px] w-[21px] min-w-[21px]',
  title: 'mb-1 text-left',
  links: 'mt-3 flex gap-3',
  variants: {
    default: {
      wrapper: 'bg-white border-gray-300',
      icon: 'text-primary-500',
      title: 'text-gray-700',
      message: 'text-gray-600',
      links: 'text-primary-500',
    },
    info: {
      wrapper: 'bg-primary-25 border-primary-300',
      icon: 'text-primary-500',
      title: 'text-primary-600',
      message: 'text-primary-500',
      links: 'text-primary-600',
    },
    success: {
      wrapper: 'bg-success-25 border-success-300',
      icon: 'text-success-500',
      title: 'text-success-600',
      message: 'text-success-500',
      links: 'text-success-600',
    },
    warning: {
      wrapper: 'bg-warning-25 border-warning-300',
      icon: 'text-warning-500',
      title: 'text-warning-600',
      message: 'text-warning-500',
      links: 'text-warning-600',
    },
    error: {
      wrapper: 'bg-error-25 border-error-300',
      icon: 'text-error-500',
      title: 'text-error-600',
      message: 'text-error-500',
      links: 'text-error-600',
    },
  },
};
