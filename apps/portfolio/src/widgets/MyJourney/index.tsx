import { Image, Text } from '@portfolio/ui';
import React from 'react';
import { Study } from './Study';
import { University } from './University';
import { SelfThought } from './SelfThought';

export const MyJourney = () => {
  return (
    <>
      <div className='py-20 pb-10 relative text-center'>
        <Text variant='text-2xl/Medium'>My journey</Text>
        <Image
          className='absolute sm:top-10 top-0 right-0 sm:left-2/3 sm:translate-x-1/5'
          src='/stars.png'
          alt=''
          width={120}
          height={120}
        />
      </div>
      <Study />
      <University />
      <SelfThought />
    </>
  );
};
