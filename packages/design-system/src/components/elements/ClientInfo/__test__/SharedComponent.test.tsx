import { render } from '@testing-library/react';
import React from 'react';

import { PopupClient } from '../SharedComponent';

describe('ClientInfo > PopupClient', () => {
  const onClose = jest.fn();
  const Heading = () => <>Heading</>;
  const Content = () => <>Content</>;
  it('Should render', async () => {
    render(
      <PopupClient
        heading={<Heading />}
        content={<Content />}
        close={onClose}
      />,
    );

    // await userEvent.keyboard('{Escape}');
    // await fireEvent.keyDown(container, { key: 'Escape', code: 'Escape' });

    // expect(onClose).toBeCalledTimes(0);
  });
});
