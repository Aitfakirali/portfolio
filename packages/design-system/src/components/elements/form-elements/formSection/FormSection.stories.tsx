import type { Meta } from '@storybook/react';
import React from 'react';

import { FormSection } from './FormSection';

const meta: Meta<typeof FormSection> = {
  title: 'Form elements/Form Section',
  component: FormSection,
};

export default meta;

const Template = () => {
  return (
    <>
      <FormSection icon='profile' sectionTitle='This the title of section'>
        <div className='h-24 w-56 bg-gray-400'></div>
      </FormSection>
      <FormSection icon='profile' sectionTitle='This the title of section'>
        <div className='h-24 w-56 bg-gray-400'></div>
      </FormSection>
    </>
  );
};

export const FormSectionStories = Template.bind({});
