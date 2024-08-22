import { theme } from './theme';
import { Icon } from '../icon/Icon';
import { Text } from '../typography/Text';
import { vclsx } from '../../../utils';

interface CallToActionProps {
  /**
   *
   */
  variant?: keyof typeof theme;

  /**
   *
   */
  title: string;
  /**
   *
   */
  icon?: string;
  /**
   *
   */
  onClick?: () => void;
  /**
   *
   */
  className?: string;
  /**
   *
   */
  as?: any;
}

export const CallToAction = ({
  variant = 'default',
  onClick,
  title,
  icon,
  className,
  as,
  ...props
}: CallToActionProps) => {
  const Wrapper = as || 'button';
  return (
    <Wrapper
      {...props}
      onClick={onClick}
      className={vclsx(theme[variant].container, className)}
    >
      <div className={theme[variant].wrapper}>
        <div className='rounded-sm bg-slate-100 p-1'>
          <Icon id={icon as string} className={theme[variant].icon} />
        </div>
        <Text variant='text-base/Medium'>{title}</Text>
      </div>
      <Icon id='arrow-right-1' className={theme[variant].arrow} />
    </Wrapper>
  );
};
