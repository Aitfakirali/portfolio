import { render } from '@testing-library/react';

import { Progress } from '../Progress';

describe('Progress Component', () => {
  it('should render the component', () => {
    render(<Progress label='Badge' />);
  });
});
