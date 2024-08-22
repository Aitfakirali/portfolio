import { render, screen } from '@testing-library/react';

import { RadioGroup } from '../RadioGroup';

describe('RadioGroup', () => {
  const handleChange = jest.fn();

  it('should render', () => {
    render(
      <RadioGroup
        options={[
          { label: 'Oui', value: 'oui' },
          { label: 'Non', value: 'non' },
          { label: 'Other', value: 'other' },
        ]}
        onChange={handleChange}
        label='Radio Group'
      />,
    );

    expect(screen.getByText('Radio Group')).toBeInTheDocument();
  });
});
