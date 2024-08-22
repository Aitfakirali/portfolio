import React from 'react';

import { ConstatCheckboxLine } from './ConstatCheckboxLine';
import { ItemsProps } from './Constats';
import { Heading } from '../Heading/Heading';

export interface ConstatsCheckboxesProps {
  /**
   *
   */
  handleChange: (name: string, value: string) => void;
  /**
   *
   */
  checkboxLines: ItemsProps[];
  /**
   *
   */
  handleSubmit: (e: React.FormEvent) => void;
}

export const ConstatsCheckboxes = ({
  checkboxLines,
  handleSubmit,
  handleChange,
}: ConstatsCheckboxesProps) => {
  return (
    <div>
      <Heading className='text-primary-300 mb-8 min-w-[650px] justify-center'>
        Cochez les cases concernées pour chacun des véhicules{' '}
      </Heading>
      <form className='flex w-full flex-col gap-8 px-4' onSubmit={handleSubmit}>
        {checkboxLines.map((line, index) => (
          <ConstatCheckboxLine
            key={index}
            number={line.number}
            title={line.title}
            name={line.name}
            checkedA={line.checkedA}
            valueA={line.valueA}
            checkedB={line.checkedB}
            valueB={line.valueB}
            handleChange={handleChange}
            hrExist={line.hrExist}
          />
        ))}
      </form>
    </div>
  );
};
