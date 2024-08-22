import { render } from '@testing-library/react';

import { Range } from '../Range';

describe('Range', () => {
  const handleChange = jest.fn();

  it('should render', () => {
    render(
      <Range name='range' onChange={handleChange} min={0} max={3} value={0} />,
    );

    expect(document.querySelector('#inputRange')).toBeInTheDocument();
  });
});
