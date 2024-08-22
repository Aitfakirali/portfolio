import clsx from 'clsx';

import { notificationTheme } from './theme';
import { Icon } from '../icon/Icon';
import { Link } from '../link/Link';
import { Text } from '../typography/Text';

/**
 *
 */
export interface NotificationProps {
  /**
   * The variant to use.
   */
  variant?: keyof typeof notificationTheme.variants;
  /**
   * The title of the notification.
   */
  title?: string;
  /**
   * The message of the notification.
   */
  message?: string;
  /**
   *  The class name to add to the notification.
   */
  className?: string;
  /**
   * The function to call to closed the notification.
   */
  onClose?: () => void;
  /**
   * The link to add to the notification.
   */
  link?: string;
}

/**
 *
 */
export const Notification = ({
  variant = 'default',
  title,
  message,
  className,
  onClose,
  link,
}: NotificationProps) => {
  const icons = {
    info: 'info-circle',
    success: 'tick-circle',
    warning: 'info-circle',
    error: 'danger',
    default: 'info-circle',
  };

  return (
    <div
      data-testid='notification'
      className={clsx(
        notificationTheme.wrapper,
        notificationTheme.variants[variant]?.wrapper,
        className,
      )}
    >
      <div className='flex gap-3'>
        <Icon
          id={icons[variant]}
          className={clsx(
            notificationTheme.icon,
            notificationTheme.variants[variant]?.icon,
          )}
        />
        <div className='w-full'>
          {title && (
            <Text
              variant='text-base/Semibold'
              className={clsx(
                notificationTheme.title,
                notificationTheme.variants[variant]?.title,
              )}
            >
              {title}
            </Text>
          )}
          {message && (
            <Text
              variant='text-base/Regular'
              className={notificationTheme.variants[variant]?.message}
            >
              {message}
            </Text>
          )}
          {(link || onClose) && (
            <div
              className={clsx(
                notificationTheme?.links,
                notificationTheme.variants[variant]?.links,
              )}
            >
              {onClose && (
                <span onClick={onClose} className='cursor-pointer'>
                  <Text as='span' variant='text-base/Semibold'>
                    Ignorer
                  </Text>
                </span>
              )}
              {link && (
                <Link href={link}>
                  <Text as='span' variant='text-base/Semibold'>
                    En savoir plus
                  </Text>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
