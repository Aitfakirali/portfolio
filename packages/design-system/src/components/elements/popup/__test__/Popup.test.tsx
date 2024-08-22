import { render } from '@testing-library/react';
import React from 'react';

import { Popup } from '../Popup';

describe('Popup', () => {
  it('Should render', () => {
    render(
      <Popup heading={<div className='p-4'>Title</div>}>
        <p>Popup content</p>
      </Popup>,
    );
  });

  it('Should be visible', () => {
    render(
      <Popup isShown={true} heading={<div className='p-4'>Title</div>}>
        <p>Popup content</p>
      </Popup>,
    );
  });
});
