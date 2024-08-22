/* eslint-disable @typescript-eslint/no-empty-function */
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';

import { Constats } from '../Constats';

const items = [
  {
    checkedB: false,
    valueB: 'x',
    name: 'constatsx',
    number: '1',
    title:
      "Heurtait à l'arrière, en roulant dans le meme sens et sur une meme file",
    checkedA: false,
    valueA: '1',
    hrExist: false,
  },
];

describe('Constats', () => {
  it('Should render', async () => {
    render(<Constats items={items} />);

    await act(async () => {
      await fireEvent.click(screen.getAllByRole('checkbox')[0]);
      // await fireEvent.submit(screen.getAllByRole('form')[0]);
    });
  });
});
