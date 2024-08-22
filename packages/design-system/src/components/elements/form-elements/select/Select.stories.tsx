import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import { Select } from './Select';
import { SelectItem, SelectProps } from './types';
import { Icon } from '../../icon/Icon';

const meta: Meta<SelectProps> = {
  title: 'Form elements/Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;
const Template = ({ ...args }: SelectProps) => {
  const [selected, setSelected] = useState(args?.value);

  useEffect(() => {
    setSelected(args?.value);
  }, [args?.value]);
  const handleChange = (value?: string) => {
    setSelected(value);
  };

  return <Select {...args} value={selected} onChange={handleChange} />;
};

export const NormalSelect: Story = {
  args: {
    label: 'Select Option',
    placeholder: 'Select an option',
    items: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const ErrorSelect: Story = {
  args: {
    label: 'Select Option',
    hasError: true,
    errorMessage: 'required',
    placeholder: 'Select an option',
    items: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
  render: (args) => {
    return <Template {...args} />;
  },
};
export const DisabledSelect: Story = {
  args: {
    label: 'Select Option',
    disabled: true,
    placeholder: 'Select an option',
    items: undefined,
    value: 'option2',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const UnavailableItems: Story = {
  args: {
    label: 'Select Option',
    disabled: false,
    placeholder: 'Select an option',
    items: [
      { value: 'option1', label: 'Option 1', unavailable: true },
      { value: 'option2', label: 'Option 2', unavailable: true },
      { value: 'option3', label: 'Option 3', unavailable: false },
    ],
    value: 'option2',
  },
  render: (args) => {
    return <Template {...args} />;
  },
};

export const SelectWithIcon: Story = {
  args: {
    placeholder: 'Select an option',
    items: [
      { value: 'option1', label: '2019' },
      { value: 'option2', label: '2020' },
      { value: 'option3', label: '2021' },
      { value: 'option4', label: '2022' },
    ],
    icon: <Icon id='calendar' className='text-primary-800 h-4 w-4' />,
  },
  render: (args) => {
    return <Template value='option2' className='max-w-[85px]' {...args} />;
  },
};

export const Loading: Story = {
  args: {
    label: 'Select Option',
    disabled: false,
    placeholder: 'Select an option',
    value: 'option2',
  },
  render: (args) => {
    const [isLoading, setIsloading] = useState(false);
    const [itemss, setItems] = useState<SelectItem[] | undefined>();
    const handleClick = () => {
      setIsloading(true);
      setTimeout(() => {
        setIsloading(false);
        setItems([
          { value: 'option1', label: 'Option 1', unavailable: true },
          { value: 'option2', label: 'Option 2', unavailable: true },
          { value: 'option3', label: 'Option 3', unavailable: false },
        ]);
      }, 2000);
    };
    return (
      <>
        <button
          onClick={handleClick}
          className='bg-black px-6 py-3 text-white'
        ></button>
        <Template isLoading={isLoading} {...args} items={itemss} />
      </>
    );
  },
};
