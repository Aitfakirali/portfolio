import { render, screen } from '@testing-library/react';

import { RangeImage } from '../RangeImage';

describe('RangeImage', () => {
  const handleChange = jest.fn();
  it('should render', () => {
    render(
      <RangeImage
        name='RangeImage'
        value={0}
        items={[
          { label: 'label1', image: 'image' },
          { label: 'label2', image: 'image' },
          { label: 'label3', image: 'image' },
        ]}
        variant='default'
        onChange={handleChange}
      />,
    );

    expect(screen.getByText('label3')).toBeInTheDocument();
  });
});
