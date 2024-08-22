import getConfig from 'next/config';
import React from 'react';
const { publicRuntimeConfig } = getConfig();
/**
 *
 */
type IconProps = {
  /**
   *
   */
  id: string;
} & React.ComponentProps<'svg'>;

/**
 *
 */
export const Icon: React.FC<IconProps> = ({ id, ...props }) => (
  <svg {...props}>
    <use
      className='fill-current'
      href={`${publicRuntimeConfig?.basePath}/icons.svg#${id}`}
    />
  </svg>
);
