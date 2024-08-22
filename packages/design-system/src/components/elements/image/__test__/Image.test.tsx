import { render } from '@testing-library/react';
import React from 'react';

import { Image } from '../Image';

describe('Image', () => {
  it('Should render', () => {
    render(
      <Image
        title='Vous-avez un souci ?'
        alt='Vous-avez un souci ?'
        src='/images/test.png'
        width={100}
        height={100}
      />,
    );
  });
});
