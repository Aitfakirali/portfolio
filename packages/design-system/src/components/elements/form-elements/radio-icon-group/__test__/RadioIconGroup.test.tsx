import { render, screen } from '@testing-library/react';

import { RadioIconGroup } from '../RadioIconGroup';

describe('RadioIconGroup', () => {
  const handleChange = jest.fn();

  it('should render', () => {
    render(
      <RadioIconGroup
        name='radio-icon-group'
        options={[
          { label: 'Oui', value: 'oui', icon: 'plus' },
          { label: 'Non', value: 'non', icon: 'plus' },
          { label: 'Maybe', value: 'maybe', icon: 'plus' },
        ]}
        onChange={handleChange}
      />,
    );

    expect(screen.getByText('Maybe')).toBeInTheDocument();
  });
});
