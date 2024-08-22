import { render, screen } from '@testing-library/react';

import { RadioIcon } from '../RadioIcon';

describe('RadioIcon', () => {
  const handleChange = jest.fn();

  it('should render', () => {
    render(
      <RadioIcon
        name='radio-icon'
        label='Radio Icon'
        onChange={handleChange}
        icon='profile'
      />,
    );

    expect(screen.getByText('Radio Icon')).toBeInTheDocument();
  });
});
