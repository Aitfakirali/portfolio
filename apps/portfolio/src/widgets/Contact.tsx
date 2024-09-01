import { Container } from '@/components/container';
import { Image, Link, Text } from '@portfolio/ui';
import React from 'react';

export const Contact = () => {
  return (
    <Container>
      <footer className='space-y-10 py-10 w-full'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='141'
          viewBox='0 0 728 141'
          fill='none'
          className='mx-auto w-full'
        >
          <path
            d='M2.30859 71.1963C10.6793 44.9295 33.8934 33.9093 61.2302 32.9516C86.7651 32.0571 116.635 39.7693 140.518 48.0318C259.358 89.1457 133.856 176.732 141.14 89.8522C142.861 69.3168 154.391 54.4016 167.569 39.4812C187.443 16.9794 208.079 13.5973 237.373 11.4973C288.687 7.81881 326.389 23.5416 353.506 73.6837C380.738 124.036 318.025 121.753 318.527 87.6757C318.922 60.7843 351.411 16.2666 379.158 7.92159C403.982 0.455657 447.869 -0.488561 472.516 11.1864C495.63 22.1355 512.266 49.3779 524.674 70.8853C532.372 84.2275 535.686 105.56 525.996 119.002C504.238 149.182 460.582 146.253 462.644 105.71C463.417 90.4922 474.646 73.8351 484.409 62.6456C495.089 50.4048 505.076 40.1429 521.41 29.8423C590.081 -13.4632 700.342 36.1034 725.692 68.3979'
            stroke='url(#paint0_linear_981_16832)'
            stroke-width='3'
            stroke-linecap='round'
          />
          <defs>
            <linearGradient
              id='paint0_linear_981_16832'
              x1='639.802'
              y1='70.7882'
              x2='2.30859'
              y2='70.7882'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#A9FE81' />
              <stop offset='1' stop-color='#C0F0FF' />
            </linearGradient>
          </defs>
        </svg>
        <div className='grid md:grid-cols-2 gap-10 place-items-center py-10'>
          <div className='flex flex-col items-center gap-10'>
            <Image src='/linkedin.svg' alt='' width={60} height={60} />
            <Text variant='text-caption/Bold' className='max-w-xs text-center'>
              You can contact me on{' '}
              <Link
                className='text-[#82B4FF]'
                target='_blank'
                href='https://www.linkedin.com/in/ait-fakir-ali-soufiane-220111217/'
              >
                linkedin
              </Link>
            </Text>
          </div>
          <div className='flex flex-col items-center gap-10'>
            <Image src='/github.svg' alt='' width={60} height={60} />
            <Text variant='text-caption/Bold' className='max-w-xs text-center'>
              You can see some projects in{' '}
              <Link
                target='_blank'
                className='text-[#82B4FF]'
                href='https://github.com/Aitfakirali'
              >
                Github
              </Link>
            </Text>
          </div>
        </div>
      </footer>
    </Container>
  );
};
