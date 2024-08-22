import { render } from '@testing-library/react';

import { CheckboxGroup } from '../CheckboxGroup';

describe('CheckboxGroup', () => {
  const handleChange = jest.fn();

  it('should render', () => {
    render(
      <CheckboxGroup
        className='flex gap-x-3'
        defaultValue={['oui']}
        name='checkboxGroup'
        onChange={handleChange}
        options={[
          { label: 'Oui', value: 'oui' },
          { label: 'Non', value: 'non' },
          { label: 'Other', value: 'other' },
        ]}
      />,
    );

    expect(
      document.querySelector('[name="checkboxGroup"]'),
    ).toBeInTheDocument();
  });
});
