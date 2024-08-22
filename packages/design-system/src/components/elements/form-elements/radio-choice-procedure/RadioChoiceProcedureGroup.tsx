import React from 'react';

import { RadioChoiceProcedure } from './RadioChoiceProcedure';

export type Item = {
  /**
   *
   */
  label: string;
  /**
   *
   */
  value: string;
  /**
   *
   */
  icon?: string;
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
  /**
   *
   */
  disabled?: boolean;
};

interface RadioChoiceProcedureGroupProps {
  /**
   *
   */
  items: Item[];
  /**
   *
   */
  name: string;
  /**
   *
   */
  selected?: string;
  /**
   *
   */
  onChange(e: React.FormEvent<HTMLInputElement>): void;
  /**
   *
   */
  className?: string;
  /**
   *
   */
  testidPrefix?: string;
}

export const RadioChoiceProcedureGroup = ({
  items,
  name,
  selected = '1',
  onChange,
  testidPrefix,
}: RadioChoiceProcedureGroupProps) => {
  return (
    <>
      <div className='flex flex-col gap-4 md:flex-row'>
        {items.map(
          ({
            label,
            value,
            icon,
            title,
            content,
            recommanded,
            image,
            disabled,
          }) => {
            return (
              <RadioChoiceProcedure
                key={value}
                name={name}
                label={label}
                title={title}
                content={content}
                recommanded={recommanded}
                value={value}
                checked={value === selected}
                disabled={disabled}
                icon={icon ?? 'tick-square'}
                onChange={onChange}
                image={image}
                data-testid={testidPrefix && `${testidPrefix}_${value}`}
              />
            );
          },
        )}
      </div>
    </>
  );
};
