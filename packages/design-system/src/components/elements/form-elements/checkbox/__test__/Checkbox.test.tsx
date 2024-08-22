import { render } from '@testing-library/react';

import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  const handleChange = jest.fn();

  it('should render', () => {
    render(
      <Checkbox value='checkbox' name='checkbox' onChange={handleChange} />,
    );

    expect(document.querySelector('[name="checkbox"]')).toBeInTheDocument();
  });
});
