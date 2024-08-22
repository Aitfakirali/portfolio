import { render } from '@testing-library/react';

import { Rating } from '../Rating';

describe('Progress Component', () => {
  it('should render the component', () => {
    render(<Rating label='Label' />);
  });
});
