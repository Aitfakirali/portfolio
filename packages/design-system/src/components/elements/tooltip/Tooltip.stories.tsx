// import { Tooltip } from './Tooltip';
// import { Button } from '../button/Button';

// };

// // eslint-disable-next-line
// export default {
//   title: 'Components/Tooltip',
// };

import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip';
import { Button } from '../button/Button';
import { Icon } from '../icon/Icon';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
  args: {
    position: 'topCenter',
    text: 'Prompt text',
  },
  render: (args) => (
    <div className='flex items-center gap-2 py-6'>
      <span>hover over the icon to show the tooltip</span>
      <Tooltip {...args}>
        <Icon id='information-cyrcle' className='text-primary-600 h-4 w-4' />
      </Tooltip>
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className='flex h-screen items-center justify-center gap-4'>
      <div className='flex gap-x-4'>
        <div className='flex flex-col gap-y-4'>
          <Tooltip position='leftTop' text='Prompt text'>
            <Button variant='primary' className='w-[90%]'>
              Left Top
            </Button>
          </Tooltip>
          <Tooltip position='leftCenter' text='Prompt text'>
            <Button variant='primary' className='w-[90%]'>
              Left Center
            </Button>
          </Tooltip>
          <Tooltip position='leftBottom' text='Prompt text'>
            <Button variant='primary' className='w-[90%]'>
              Left Bottom
            </Button>
          </Tooltip>
        </div>
        <div className='flex flex-col justify-between'>
          <div className='flex grow gap-x-4'>
            <div className='flex-1'>
              <Tooltip position='topLeft' text='Prompt text'>
                <Button variant='primary' className='w-[90%]'>
                  Top Left
                </Button>
              </Tooltip>
            </div>
            <div className='flex-1'>
              <Tooltip position='topCenter' text='Prompt text'>
                <Button variant='primary' className='w-[90%]'>
                  Top Center
                </Button>
              </Tooltip>
            </div>
            <div className='flex-1'>
              <Tooltip position='topRight' text='Prompt text'>
                <Button variant='primary' className='w-[90%]'>
                  Top Right
                </Button>
              </Tooltip>
            </div>
          </div>
          <div className='flex gap-x-4'>
            <Tooltip position='bottomLeft' text='Prompt text'>
              <Button variant='primary' className='w-[90%]'>
                Bottom Left
              </Button>
            </Tooltip>
            <Tooltip position='bottomCenter' text='Prompt text'>
              <Button variant='primary' className='w-[90%]'>
                Bottom Center
              </Button>
            </Tooltip>
            <Tooltip position='bottomRight' text='Prompt text'>
              <Button variant='primary' className='w-[90%]'>
                Bottom Right
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className='flex flex-col gap-y-4'>
          <Tooltip position='rightTop' text='Prompt text'>
            <Button variant='primary' className='w-[90%]'>
              Right Top
            </Button>
          </Tooltip>
          <Tooltip position='rightCenter' text='Prompt text'>
            <Button variant='primary' className='w-[90%]'>
              Right Center
            </Button>
          </Tooltip>
          <Tooltip position='rightBottom' text='Prompt text'>
            <Button variant='primary' className='w-[90%]'>
              Right Bottom
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
};
