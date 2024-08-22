import { render } from '@testing-library/react';
import React from 'react';

import { Icon } from '../Icon';

describe('Icon', () => {
  it('Should render', () => {
    render(<Icon id='calendar' />);
  });
});
