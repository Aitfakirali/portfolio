import type { Meta, StoryObj } from '@storybook/react';

import { CardNumbers } from './Kpi';

const meta: Meta<typeof CardNumbers> = {
  title: 'Components/KPI',
  component: CardNumbers,
};
export default meta;
type Story = StoryObj<typeof CardNumbers>;

export const Example1: Story = {
  render: () => (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
      <CardNumbers
        title='Chiffre d’affaires 2'
        currentAmount={990}
        currentAmountSymbol='K Dhs'
        currentDate='Depuis Janvier'
        prevAmount={930}
        prevAmountSymbol='KDhs'
        prevDate='Même période 2019'
        shipValue={2.4}
        shipType='up'
      />
      <CardNumbers
        title='Objectif annuel'
        currentAmount={1.5}
        currentAmountSymbol='K Dhs'
        currentDate='Depuis Janvier'
        prevAmount={930}
        prevAmountSymbol='KDhs'
        prevDate='Objectif 2019'
        shipValue={2.8}
        shipType='up'
      />
      <CardNumbers
        title='Objectif annuel'
        currentAmount={112}
        currentAmountSymbol='%'
        currentDate='Depuis Janvier'
        prevAmount={139}
        prevAmountSymbol='%'
        prevDate='Même période 2019'
        shipValue={2.8}
        shipType='down'
      />
    </div>
  ),
};
