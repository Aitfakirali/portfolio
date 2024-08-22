// test again
import React, { ReactNode } from 'react';

import { theme } from './theme';
import { Heading } from '../../Heading/Heading';
import { vclsx } from '../../../../utils/vclsx';

/**
 *
 */
export interface FormSectionProps {
  /**
   *
   */
  variant?: keyof typeof theme;
  /**
   *
   */
  children: React.ReactNode;
  /**
   *
   */
  icon: string;
  /**
   *
   */
  sectionTitle: string;
  /**
   *
   */
  className?: string;
  /**
   *
   */
  separator?: boolean;

  /**
   *
   */
  tooltip?: ReactNode;
}

/**
 *
 */
export const FormSection = ({
  variant = 'default',
  icon,
  sectionTitle,
  children,
  className,
  separator,
  tooltip,
}: FormSectionProps) => {
  return (
    <div className={theme[variant].container}>
      <Heading
        as='h2'
        separator={separator}
        className={vclsx('mb-4')}
        icon={icon}
        title={sectionTitle}
      >
        {tooltip}
      </Heading>
      <div className={vclsx(theme[variant].childrenContainer, className)}>
        {children}
      </div>
    </div>
  );
};
