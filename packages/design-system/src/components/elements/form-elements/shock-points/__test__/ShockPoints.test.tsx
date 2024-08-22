/* eslint-disable @typescript-eslint/no-empty-function */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';

import { ShockPoints } from '../ShockPoints';

describe('ShockPoints', () => {
  it('should render', async () => {
    const onChange = jest.fn();
    render(
      <ShockPoints
        name='ShockPoints'
        onChange={onChange}
        label='Hello'
        testidPrefix='testidPrefix'
        hasError={true}
        items={[
          { position: 'topCenter', title: 'LAT G', value: 'LAT G' },
          { position: 'topRight', title: 'AVG', value: 'AVG' },
          { position: 'topLeft', title: 'ARG', value: 'ARG' },
          { position: 'bottomCenter', title: 'LAT D', value: 'LAT D' },
          { position: 'bottomRight', title: 'AVD', value: 'AVD' },
          { position: 'bottomLeft', title: 'ARD', value: 'ARD' },
          { position: 'rightCenter', title: 'AV', value: 'AV' },
          { position: 'leftCenter', title: 'AR', value: 'AR' },
        ]}
      />,
    );

    expect(screen.getByText('LAT G')).toBeInTheDocument();

    await act(async () => {
      await fireEvent.click(screen.getAllByRole('checkbox')[0]);
      await fireEvent.click(screen.getAllByRole('checkbox')[0]);
    });
  });
});
