import React, { useState } from 'react';

import { ConstatClientInfo } from './ConstatClientInfo';
import { ConstatsCheckboxes } from './ConstatsCheckboxes';
import { ConstatsVehicule } from './ConstatsVehicule';
import { Button } from '../button/Button';
import { vclsx } from '../../../utils/vclsx';

export interface ItemsProps {
  /**
   *
   */
  number: string;
  /**
   *
   */
  title: string;
  /**
   *
   */
  name: string;
  /**
   *
   */
  checkedA: boolean;
  /**
   *
   */
  valueA: string;
  /**
   *
   */
  checkedB: boolean;
  /**
   *
   */
  valueB: string;
  /**
   *
   */
  hrExist?: boolean;
}

type CheckboxResult = Record<
  string,
  {
    /**
     *
     */
    A: boolean;
    /**
     *
     */
    /**
     *
     */
    B: boolean;
  }
>;

export interface constatProps {
  /**
   *
   */
  items?: ItemsProps[];
  /**
   *
   */
  //constatImg?: imgProps;
}

export const Constats = ({ items = [] }: constatProps) => {
  const [constatResult, setconstatResult] = useState<CheckboxResult[]>([]);
  const [checkboxLines, setCheckboxLines] = useState<ItemsProps[]>(items);

  const handleChange = (name: string, value: string) => {
    setCheckboxLines((old) => {
      return old.map((item) => {
        if (item.name === name) {
          return {
            ...item,
            checkedA: item?.valueA === value ? !item.checkedA : item.checkedA,
            checkedB: item?.valueB === value ? !item.checkedB : item.checkedB,
          };
        }
        return { ...item };
      });
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result: CheckboxResult[] = checkboxLines.map((item) => ({
      [item.name]: { A: item.checkedA, B: item.checkedB },
    }));
    setconstatResult(result);
  };

  return (
    <div>
      <ConstatClientInfo />
      <div
        className={vclsx(
          'flex flex-row justify-between',
          constatResult.length ? '_flex' : 'flex_',
        )}
      >
        <ConstatsVehicule title='Vehicule A' />
        <ConstatsCheckboxes
          checkboxLines={checkboxLines}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          //constatImg={constatImg}
        />
        <ConstatsVehicule title='Vehicule B' />
      </div>
      <div className='mt-9 flex items-center justify-between gap-6'>
        <Button variant='outline'>Annuler</Button>
        <div className='flex items-center gap-6'>
          <Button variant='secondary' iconRight='add'>
            Valider et ajouter un constat
          </Button>
          <Button iconRight='arrow-right'>Valider</Button>
        </div>
      </div>
    </div>
  );
};
