import type { Meta } from '@storybook/react';

import { CardContrat } from './CardContrat';
// import { Text } from '../typography/Text';

const meta: Meta<typeof CardContrat> = {
  title: 'Components/Card Contrat',
  component: CardContrat,
};

export default meta;

const elements = [
  {
    label: 'FALIH HAMDI',
    date: '10/10/2020',
    type: 'Enfant',
  },
  {
    label: 'FALIH HAMDI',
    date: '10/10/2020',
  },
];

export const CardDetailExample = () => {
  return (
    <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
      <CardContrat nom='FALIH AMINE' numero='3233' elements={elements} />
      <CardContrat nom='FALIH AMINE' elements={elements.slice(1)} />
    </div>
  );
};

// export const CardDetailExample2 = () => {
//   return (
//     <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
//       <CardDetail
//         badgeLabel='Clinique palmier Casablanca'
//         badgeIcon='car-crush2'
//       >
//         <div className='space-y-1'>
//           <Text className='text-gray-500' variant='text-base/Regular'>
//             Avenue des fleures{' '}
//           </Text>
//           <Text className='text-gray-500' variant='text-base/Regular'>
//             0522 464 646
//           </Text>
//         </div>
//       </CardDetail>
//     </div>
//   );
// };
