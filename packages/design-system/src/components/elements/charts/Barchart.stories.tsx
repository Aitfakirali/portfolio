import type { Meta } from '@storybook/react';

import { BarChart } from './Barchart';
// import { Text } from '../typography/Text';

const meta: Meta<typeof BarChart> = {
  title: 'Components/Barchart',
  component: BarChart,
};

export default meta;

export const Primary = () => {
  return (
    <div className='grid h-full grid-cols-1 gap-5 md:grid-cols-2'>
      <BarChart
        height={250}
        width={400}
        data={[
          {
            'Épargne constituée': 200.2,
            'Cumul versements': 100.4,
            'Cumul rachats': -20.0,
            date: '2019-03-09',
          },
          {
            'Épargne constituée': 72.2,
            'Cumul versements': 63.4,
            'Cumul rachats': -30.0,
            date: '2020-01-09',
          },
          {
            'Épargne constituée': 100.2,
            'Cumul versements': 50.4,
            date: '2022-01-09',
          },
          {
            'Épargne constituée': 300.2,
            'Cumul versements': 100.4,
            date: '2023-03-09',
          },
        ]}
      />
    </div>
  );
};
