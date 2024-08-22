import { useMemo } from 'react';

import { theme } from './theme';
import { Text } from '../typography/Text';
import { vclsx } from '../../../utils';

interface TabItemProp {
  /**
   *
   */
  color: string;

  /**
   *
   */
  title: string;

  /**
   *
   */
  id: number;
}

interface TabsProps {
  /**
   *
   */
  tabs: TabItemProp[];

  /**
   *
   */
  activeTab: number;

  /**
   *
   */
  onClick: (id: number) => void;
  /**
   *
   */
  className?: string;
  /**
   *
   */
  variant?: keyof typeof theme;
}

export const Tabs = ({
  tabs = [],
  activeTab,
  onClick,
  className,
  variant = 'default',
}: TabsProps) => {
  const handleClick = (id: number) => {
    if (onClick) {
      onClick(id);
    }
  };

  const activeColor = useMemo(
    () => tabs.find((tab) => tab.id == activeTab)?.color,
    [activeTab],
  );

  return (
    <div
      className={vclsx(theme[variant].wrapper, className)}
      style={{
        borderColor: activeColor,
      }}
    >
      {tabs.map((tab) => (
        <TabItem
          key={tab.id}
          variant={variant}
          active={activeTab == tab.id}
          {...tab}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

const TabItem = ({
  color,
  id,
  onClick,
  title,
  variant,
  active,
}: TabItemProp & {
  /**
   *
   */
  onClick: (id: number) => void;

  /**
   *
   */
  variant: keyof typeof theme;
  /**
   *
   */
  active: boolean;
}) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={vclsx(theme[variant].tabItem)}
      style={
        active
          ? {
              backgroundColor: color,
              color: 'white',
            }
          : {}
      }
    >
      <Text variant='text-base/Medium'>{title}</Text>
    </button>
  );
};
