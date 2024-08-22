import getConfig from 'next/config';
import { default as NextImage } from 'next/image';
import React, { ComponentProps } from 'react';

const { publicRuntimeConfig } = getConfig();

/**
 *
 */
interface ImageProps {
  /**
   *
   */
  src: string;
  /**
   *
   */
  alt: string;
  /**
   *
   */
  quality?: number;
  /**
   *
   */
  className?: string;
}

/**
 *
 */
export const Image: React.FC<
  ImageProps & Omit<ComponentProps<typeof NextImage>, keyof ImageProps>
> = ({ src, alt, quality = 80, className = '', ...rest }) => {
  return (
    <NextImage
      unoptimized
      src={
        src.startsWith(publicRuntimeConfig?.basePath)
          ? src
          : `${publicRuntimeConfig?.basePath}${src}`
      }
      alt={alt}
      quality={quality}
      className={className}
      {...rest}
    />
  );
};
