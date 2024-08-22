import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Autocomplete, AutocompleteItem } from './Autocomplete';

const listCities: AutocompleteItem[] = [
  { value: '1', content: 'Casablanca' },
  { value: '2', content: 'Paris' },
  { value: '3', content: 'Agadir' },
];

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const Primary: Story = {
  args: {
    variant: 'default',
    list: listCities,
    hasError: false,
    errorMessage: 'This could be the error message of your input',
  },
};

const Example = () => {
  const [selected, setSelected] = useState<string>(listCities[0].content);

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  return (
    <div className='flex flex-col gap-14'>
      <div className='flex items-start gap-x-12'>
        <Autocomplete
          selected={selected}
          setSelected={handleSelect}
          list={listCities}
          hasError={false}
        />
        <Autocomplete
          selected={selected}
          setSelected={handleSelect}
          list={listCities}
          errorMessage='This could be the error message of your input'
          hasError
        />
      </div>
    </div>
  );
};

export const States: Story = {
  render: () => {
    return <Example />;
  },
};
