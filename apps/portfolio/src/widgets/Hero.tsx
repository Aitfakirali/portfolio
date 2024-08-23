import { Button, Image, Text } from '@portfolio/ui';
import React from 'react';

export const Hero = () => {
  return (
    <div className='flex-1 relative flex flex-col justify-center p-5 md:p-20'>
      <div className='hidden md:block absolute -top-0 left-20 transform rotate-45'>
        <Image src='/shape_1.png' alt='shape' width={100} height={200} />
      </div>
      {/* <div className='absolute z-10 left-0'>
        <Image src='/Escultures.png' alt='shape' width={300} height={400} />
        <div className='-z-10 absolute left-1/2 inset-0 w-full h-full rounded-full bg-indigo-500' />
      </div> */}
      <div className='hidden md:block absolute bottom-0 left-20 transform rotate-45'>
        <Image src='/shape.png' alt='shape' width={100} height={200} />
      </div>

      <div className='space-y-4 md:space-y-10 max-w-2xl relative z-20 mx-auto'>
        <Text variant='text-md/Light'>
          Hello, I'am <b>Soufiane</b>
        </Text>
        <Text
          className='font-primary text-transparent text-8xl leading-[96px] bg-gradient-to-l from-[#009379] to-[#009379]/90 bg-clip-text inline'
          variant='text-2xl/Regular'
        >
          Web Developer
        </Text>

        <Text>
          Meet Soufiane, a skilled software developer with a passion for
          crafting stunning web applications. With expertise in modern
          frameworks and a keen eye for design, they transform ideas into
          interactive and user-friendly digital experiences. Ready to bring your
          vision to life on the web!
        </Text>
        <Button variant='dark' className='self-start'>
          Contact me
        </Button>
      </div>

      <div className='absolute -top-10 right-20 transform rotate-45'>
        <Image src='/shape.png' alt='shape' width={100} height={200} />
      </div>
      {/* <div className='absolute z-10 right-0'>
        <Image src='/Escultures.png' alt='shape' width={300} height={400} />
        <div className='-z-10 absolute left-1/2 inset-0 w-full h-full rounded-full bg-indigo-500' />
      </div> */}
      <div className='absolute -bottom-10 right-20 transform rotate-45'>
        <Image src='/shape_1.png' alt='shape' width={100} height={200} />
      </div>
    </div>
  );
};
