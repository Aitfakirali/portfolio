import { Image, Text } from '@portfolio/ui';
import React from 'react';
import { Study } from './Study';
import { University } from './University';
import { SelfThought } from './SelfThought';

export const MyJourney = () => {
  return (
    <div>
      <div className='py-20 pb-10 relative text-center'>
        <Text variant='text-2xl/Medium'>My journey</Text>
        <Image
          className='absolute top-10 left-2/3 translate-x-1/5'
          src='/stars.png'
          alt=''
          width={120}
          height={120}
        />
      </div>
      <Study />
      <University />
      <SelfThought />
    </div>
  );
};
