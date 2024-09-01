import { Container } from '@/components/container';
import { Image, Text } from '@portfolio/ui';
import React from 'react';

export const Hero = () => {
  return (
    // <div className='flex-1 relative flex flex-col justify-center p-5 md:p-20'>
    //   <div className='hidden md:block absolute -top-0 left-20 transform rotate-45'>
    //     <Image src='/shape_1.png' alt='shape' width={100} height={200} />
    //   </div>
    //   {/* <div className='absolute z-10 left-0'>
    //     <Image src='/Escultures.png' alt='shape' width={300} height={400} />
    //     <div className='-z-10 absolute left-1/2 inset-0 w-full h-full rounded-full bg-indigo-500' />
    //   </div> */}
    //   <div className='hidden md:block absolute bottom-0 left-20 transform rotate-45'>
    //     <Image src='/shape.png' alt='shape' width={100} height={200} />
    //   </div>

    //   <div className='space-y-4 md:space-y-10 max-w-2xl relative z-20 mx-auto'>
    //     <Text variant='text-md/Light'>
    //       Hello, I'am <b>Soufiane</b>
    //     </Text>
    //     <Text
    //       className='font-primary text-transparent text-8xl leading-[96px] bg-gradient-to-l from-[#009379] to-[#009379]/90 bg-clip-text inline'
    //       variant='text-2xl/Regular'
    //     >
    //       Web Developer
    //     </Text>

    //     <Text>
    //       Meet Soufiane, a skilled software developer with a passion for
    //       crafting stunning web applications. With expertise in modern
    //       frameworks and a keen eye for design, they transform ideas into
    //       interactive and user-friendly digital experiences. Ready to bring your
    //       vision to life on the web!
    //     </Text>
    //     <Button variant='dark' className='self-start'>
    //       Contact me
    //     </Button>
    //   </div>

    //   <div className='absolute -top-10 right-20 transform rotate-45'>
    //     <Image src='/shape.png' alt='shape' width={100} height={200} />
    //   </div>
    //   {/* <div className='absolute z-10 right-0'>
    //     <Image src='/Escultures.png' alt='shape' width={300} height={400} />
    //     <div className='-z-10 absolute left-1/2 inset-0 w-full h-full rounded-full bg-indigo-500' />
    //   </div> */}
    //   <div className='absolute -bottom-10 right-20 transform rotate-45'>
    //     <Image src='/shape_1.png' alt='shape' width={100} height={200} />
    //   </div>
    // </div>
    <Container className='min-h-screen grid place-content-center gap-20'>
      <Image
        src='/Avatar.png'
        alt=''
        width={250}
        height={250}
        className='mx-auto'
      />
      <Text
        variant='text-huge-headline/Bold'
        className='text-title lg:text-huge-headline text-center bg-gradient-to-r text-transparent bg-clip-text from-[#DBA6F4] to-[#A981FE]'
      >
        <span>
          Hi. I'am Soufiane. <br />
        </span>
        <span>A Web Developer.</span>
      </Text>

      <CurvedLine />
    </Container>
  );
};

const CurvedLine = () => {
  return (
    <svg
      height='141'
      viewBox='0 0 728 141'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='mx-auto w-full'
    >
      <path
        d='M2.30859 70.8467C10.6793 44.5799 33.8934 33.5597 61.2302 32.602C86.7651 31.7075 116.635 39.4197 140.518 47.6822C259.358 88.796 133.856 176.383 141.14 89.5026C142.861 68.9672 154.391 54.052 167.569 39.1316C187.443 16.6297 208.079 13.2477 237.373 11.1477C288.687 7.4692 326.389 23.192 353.506 73.3341C380.738 123.686 318.025 121.403 318.527 87.326C318.922 60.4347 351.411 15.917 379.158 7.57198C403.982 0.106048 447.869 -0.83817 472.516 10.8368C495.63 21.7859 512.266 49.0283 524.674 70.5357C532.372 83.8779 535.686 105.211 525.996 118.652C504.238 148.833 460.582 145.904 462.644 105.36C463.417 90.1426 474.646 73.4855 484.409 62.296C495.089 50.0552 505.076 39.7933 521.41 29.4927C590.081 -13.8128 700.342 35.7538 725.692 68.0483'
        stroke='url(#paint0_linear_1003_162)'
        strokeWidth='3'
        strokeLinecap='round'
      />
      <defs>
        <linearGradient
          id='paint0_linear_1003_162'
          x1='639.802'
          y1='70.4386'
          x2='2.30859'
          y2='70.4386'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#DBA6F4' />
          <stop offset='1' stopColor='#A981FE' />
        </linearGradient>
      </defs>
    </svg>
  );
};
