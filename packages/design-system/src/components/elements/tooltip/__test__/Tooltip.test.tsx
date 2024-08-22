import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { Tooltip } from '../Tooltip';

describe('Layer', () => {
  it('should render', async () => {
    render(
      <div className='flex items-center gap-2 py-6'>
        <Tooltip text='tooltip content'>
          <span>hover over this text to show the tooltip</span>
        </Tooltip>
      </div>,
    );

    await act(async () =>
      fireEvent.mouseOver(
        screen.getByText('hover over this text to show the tooltip'),
      ),
    );

    const tooltip = await screen.findByText('tooltip content');

    expect(tooltip).toBeInTheDocument();
  });
});
