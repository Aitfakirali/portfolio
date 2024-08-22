import React from 'react';

import { theme } from './theme';
import { RadioHtml } from '../radio-html/RadioHtml';
import { Badge } from '../../badge/Badge';
import { Image } from '../../image/Image';
import { Text } from '../../typography/Text';
import { vclsx } from '../../../../utils/vclsx';

export interface RadioChoiceProcedureProps {
  /**
   * this is a key description
   */
  key: string;
  /**
   * change the RadioChoiceProcedure checked or unchecked
   */
  variant?: keyof typeof theme;
  /**
   *
   */
  checked?: boolean;
  /**
   *
   */
  disabled?: boolean;
  /**
   *
   */
  value: string;
  /**
   * The text content of the badge
   */
  label?: string;
  /**
   *
   */
  name: string;
  /**
   *
   */
  hasError?: boolean;
  /**
   *
   */
  onChange(e: React.FormEvent<HTMLInputElement>): void;
  /**
   *
   */
  icon: string;
  /**
   * override the default style
   */
  className?: string;
  /**
   *
   */
  title: string;
  /**
   *
   */
  content: string;
  /**
   *
   */
  recommanded?: boolean;
  /**
   *
   */
  image: string;
}

export const RadioChoiceProcedure = ({
  variant = 'default',
  checked = true,
  disabled,
  value,
  label,
  name,
  hasError,
  onChange,
  title,
  content,
  image,
  recommanded,
  className,
  ...rest
}: RadioChoiceProcedureProps) => {
  return (
    <RadioHtml
      value={value}
      name={name}
      disabled={disabled}
      onChange={onChange}
      className={className}
      {...rest}
    >
      <div
        className={vclsx(
          theme[variant].wrapper.base,
          checked
            ? theme[variant].wrapper.checked
            : theme[variant].wrapper.unchecked,
          hasError && theme[variant].error,
          disabled ? theme[variant].wrapper.disabled : checked,
          recommanded && theme[variant].wrapper.recommanded,
        )}
      >
        <div className={theme[variant].imageWrapper}>
          <div
            className={vclsx(
              'bg-primary-50 absolute inset-0 h-full w-full rounded-full',
              recommanded ? 'bg-transparent' : 'bg-primary-50 ',
            )}
          />
          <Image
            className='relative z-10 md:hidden'
            src={image}
            alt='Hifad express'
            height={70}
            width={70}
            unoptimized
          />
          <Image
            className='relative z-10 hidden md:inline'
            src={image}
            alt='Hifad express'
            width={172}
            height={172}
            unoptimized
          />
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-1 flex-wrap items-center gap-x-3 md:justify-center'>
            <Text
              variant='text-lg/Bold'
              as='h3'
              className='hidden min-w-max capitalize md:inline'
            >
              {title}
            </Text>
            <Text
              variant='text-base/Semibold'
              as='h3'
              className='min-w-max capitalize md:hidden'
            >
              {title}
            </Text>
            {recommanded && (
              <div className={theme[variant].badgeWrapper}>
                <Badge
                  label='Procédure recommandée'
                  variant='recommanded'
                  size='md'
                  className='hidden md:inline'
                />
                <Badge
                  label='Recommandée'
                  variant='recommanded'
                  size='md'
                  className='md:hidden'
                />
              </div>
            )}
          </div>
          <Text
            variant='text-base/Regular'
            className='mb-5 line-clamp-3 hidden min-w-[200px] md:inline'
          >
            {content}
          </Text>
          <Text
            variant='text-sm/Regular'
            className='mb-5 line-clamp-3 md:hidden'
          >
            {content}
          </Text>
          {label && (
            <Badge
              size='lg'
              variant='outline'
              className={vclsx(
                theme[variant].btn.base,
                checked ? theme[variant].btn.checked : '',
                !checked ? theme[variant].btn.unchecked : '',
              )}
              label={label}
            />
          )}
        </div>
      </div>
    </RadioHtml>
  );
};
