import clsx from 'clsx';
import Link from 'next/link';

import { tabsTheme } from './theme';
import { Text } from '../typography/Text';

/**
 *
 */
interface TabItemProps {
  /**
   *
   */
  title: string;
  /**
   *
   */
  number?: number;
  /**
   *
   */
  id: number;
  /**
   *
   */
  variant?: keyof typeof tabsTheme;
  /**
   *
   */
  href?: string;
}

/**
 *
 */
interface TabsMenuProps {
  /**
   * The tabs to display.
   */
  tabs: TabItemProps[];
  /**
   * The active tab's ID.
   */
  activeTab: number;
  /**
   * The function to call when a tab is clicked.
   */
  onClick?: (id: number) => void;
  /**
   * The variant to use.
   */
  variant?: keyof typeof tabsTheme;
  /**
   * class name
   */
  className?: string;
}

/**
 *
 */
const TabItem = ({
  href,
  title,
  active,
  number,
  onClick,
  id,
  variant = 'default',
}: TabItemProps & {
  /**
   *
   */
  active: boolean;
  /**
   *
   */
  onClick: (id: number) => void;
}) => {
  const TabComponent = href ? Link : 'div';
  return (
    <TabComponent
      onClick={() => onClick(id)}
      className={clsx(
        tabsTheme[variant].tab.base,
        active
          ? tabsTheme[variant].tab.active
          : tabsTheme[variant].tab.disabled,
      )}
      href={href ?? '#'}
    >
      <Text variant='text-base/Medium'>{title}</Text>
      {number !== undefined && (
        <Text
          variant='text-base/Semibold'
          className={clsx(
            tabsTheme[variant].tab.number.base,
            active
              ? tabsTheme[variant].tab.number.active
              : tabsTheme[variant].tab.number.disabled,
          )}
        >
          {number}
        </Text>
      )}
    </TabComponent>
  );
};

/**
 *
 */
export const TabsMenu = ({
  tabs,
  activeTab,
  onClick,
  variant = 'default',
  className,
}: TabsMenuProps) => {
  /**
   *
   */
  const handleClick = (id: number) => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <div className={clsx(tabsTheme[variant].wrapper, className)}>
      {tabs.map((tab) => (
        <TabItem
          key={tab.id}
          title={tab.title}
          active={tab.id === activeTab}
          number={tab.number}
          onClick={handleClick}
          id={tab.id}
          variant={variant}
          href={tab.href}
        />
      ))}
    </div>
  );
};
