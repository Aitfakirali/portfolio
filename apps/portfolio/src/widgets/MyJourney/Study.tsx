import { Container } from '@/components/container';
import { Image, Text } from '@portfolio/ui';
import React from 'react';

export const Study = () => {
  return (
    <Container className='relative'>
      <div className='relative pb-20'>
        <SolidArrow />
        <DashedArrow />
        <Text className='md:max-w-sm relative md:absolute -right-10 top-20'>
          I started studying software engineering out of curiosity, but quickly
          discovered a passion for creating innovative solutions. The more I
          learned, the more I fell in love with the challenges and creativity it
          offered.
        </Text>
      </div>

      <div className='flex flex-col md:flex-row items-center gap-20'>
        <div className='flex-1 flex items-center justify-center py-10'>
          <div className='bg-white py-4 -rotate-12 scale-[.9] sm:scale-100 space-y-4 p-4'>
            <Image
              src='/ensa.jpg'
              alt=''
              width={400}
              height={300}
              className='aspect-video'
            />
            <Text className='text-black text-center'>
              Ensa Berrechid - 2017
            </Text>
          </div>
        </div>
        <div className='flex-1 space-y-6 md:max-w-md'>
          <div className='space-y-2'>
            <Text
              variant='text-2xl/Semibold'
              className='bg-clip-text text-transparent bg-gradient-to-r from-[#BFF0FF] to-[#82B4FF]'
            >
              School <Text as='span'>(2yrs)</Text>
            </Text>
            <Text className='bg-clip-text text-transparent bg-gradient-to-r from-[#BFF0FF] to-[#82B4FF]'>
              2017 - 2019
            </Text>
          </div>
          <Text variant='text-md/Regular'>
            I started studying at ENSA Berrechid In my first semester, I learnt
            how to print hello world using C,
            <br />
            <br />
            it was an excelent and enjoyable experience{' '}
          </Text>

          <div className='flex gap-5 pe-10'>
            <div className='bg-gray-800/50 p-5'>
              I was very good at solving problems (Data Structures and
              Algorithms)
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const SolidArrow = () => {
  return (
    <svg
      width='169'
      height='423'
      viewBox='0 0 100% 100%'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='mx-auto'
    >
      <path
        d='M1.27217 416.815C0.555745 416.498 0.25627 415.593 0.603258 414.794L6.25742 401.777C6.60438 400.978 7.46642 400.588 8.18282 400.906C8.89922 401.224 9.19869 402.129 8.85174 402.927L3.82581 414.498L14.2031 419.1C14.9195 419.417 15.219 420.322 14.872 421.121C14.525 421.92 13.663 422.31 12.9466 421.992L1.27217 416.815ZM134.132 3.01078C133.857 2.22759 134.24 1.30542 134.987 0.951049C135.734 0.59668 136.562 0.944308 136.837 1.7275L134.132 3.01078ZM1.42742 413.94C98.2638 370.127 144.245 304.292 159.695 231.129C175.174 157.822 160.053 76.9059 134.132 3.01078L136.837 1.7275C162.832 75.8324 178.17 157.417 162.503 231.609C146.806 305.946 100.037 372.611 2.37338 416.799L1.42742 413.94Z'
        fill='url(#paint0_linear_784_72790)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_784_72790'
          x1='-23.5881'
          y1='254.808'
          x2='198.544'
          y2='172.449'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#BFF0FF' />
          <stop offset='1' stopColor='#82B4FF' />
        </linearGradient>
      </defs>
    </svg>
  );
};

const DashedArrow = () => {
  return (
    <svg
      width='166'
      height='124'
      viewBox='0 0 166 124'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='absolute lg:rotate-0 hidden md:block top-5 left-[48.6%] translate-x-1/2'
    >
      <path
        d='M165.288 110.477C165.636 109.732 165.337 108.78 164.62 108.35L152.949 101.341C152.232 100.911 151.37 101.165 151.023 101.91C150.676 102.654 150.975 103.606 151.691 104.036L162.066 110.267L157.035 121.048C156.687 121.792 156.987 122.744 157.703 123.174C158.419 123.604 159.281 123.35 159.628 122.605L165.288 110.477ZM3.09836 2.00362C2.85587 1.16802 2.04467 0.654296 1.28651 0.85617C0.528343 1.05804 0.110311 1.89908 0.352808 2.73467L3.09836 2.00362ZM1.72559 2.36914C0.352808 2.73467 0.352826 2.73473 0.352846 2.7348C0.352854 2.73482 0.352874 2.7349 0.35289 2.73495C0.352923 2.73506 0.35296 2.73519 0.353001 2.73533C0.353084 2.73562 0.353186 2.73597 0.353307 2.73638C0.353548 2.73721 0.353863 2.7383 0.354253 2.73963C0.355033 2.74231 0.356112 2.74601 0.357491 2.75072C0.360247 2.76014 0.364201 2.77361 0.369359 2.79108C0.379674 2.82603 0.394804 2.87698 0.414793 2.94356C0.454773 3.0767 0.514196 3.27232 0.593437 3.52726C0.751915 4.03711 0.989683 4.7843 1.30973 5.74353L4.01406 4.88029C3.702 3.94496 3.47161 3.22077 3.31996 2.73288C3.24414 2.48894 3.18801 2.30409 3.15119 2.1815C3.13279 2.1202 3.11921 2.07446 3.11042 2.04468C3.10603 2.02979 3.10283 2.01889 3.10082 2.01203C3.09982 2.0086 3.09911 2.00618 3.0987 2.00478C3.0985 2.00407 3.09837 2.00363 3.09831 2.00343C3.09828 2.00333 3.09827 2.0033 3.09828 2.00333C3.09829 2.00335 3.0983 2.00338 3.09831 2.00343C3.09832 2.00345 3.09833 2.0035 3.09833 2.00351C3.09835 2.00356 3.09836 2.00362 1.72559 2.36914ZM3.46337 11.8019C4.12376 13.5618 4.89387 15.5387 5.77795 17.6968L8.40085 16.6141C7.53072 14.4901 6.7733 12.5457 6.12447 10.8166L3.46337 11.8019ZM8.28449 23.5764C9.10631 25.4316 9.99616 27.3742 10.9559 29.3884L13.4996 28.1268C12.5544 26.1431 11.678 24.2299 10.8687 22.4029L8.28449 23.5764ZM13.7796 35.1089C14.7175 36.9443 15.7086 38.8221 16.7541 40.7324L19.2086 39.2964C18.1796 37.4161 17.2038 35.5674 16.2803 33.7602L13.7796 35.1089ZM19.8843 46.2604C20.9341 48.0524 22.0301 49.8636 23.1734 51.6863L25.5233 50.0719C24.3993 48.28 23.3214 46.4988 22.2887 44.736L19.8843 46.2604ZM26.6267 57.0043C27.791 58.736 28.998 60.4715 30.2486 62.2043L32.4734 60.4041C31.2459 58.7033 30.0606 56.9992 28.9169 55.298L26.6267 57.0043ZM34.043 67.2738C35.3251 68.9252 36.6482 70.5685 38.0128 72.198L40.0868 70.2039C38.7499 68.6076 37.4532 66.997 36.1959 65.3776L34.043 67.2738ZM42.1607 76.9605C43.561 78.5057 45.001 80.0328 46.4812 81.5367L48.374 79.343C46.9269 77.8729 45.5185 76.3792 44.148 74.867L42.1607 76.9605ZM50.9702 85.9051C52.4872 87.3179 54.0429 88.704 55.6379 90.0585L57.3157 87.6651C55.7598 86.3438 54.2414 84.9909 52.7599 83.6112L50.9702 85.9051ZM60.4817 93.9767C62.1156 95.234 63.7876 96.4567 65.498 97.6402L66.9251 95.0543C65.2596 93.9018 63.631 92.7108 62.0385 91.4855L60.4817 93.9767ZM70.652 101.012C72.3823 102.079 74.1491 103.106 75.9528 104.088L77.0979 101.329C75.3438 100.374 73.6252 99.3748 71.9417 98.336L70.652 101.012ZM81.3956 106.858C83.217 107.721 85.0735 108.539 86.9655 109.306L87.8038 106.401C85.9648 105.655 84.1603 104.861 82.3897 104.022L81.3956 106.858ZM92.5938 111.403C94.4693 112.041 96.3774 112.63 98.3185 113.167L98.8407 110.154C96.9531 109.632 95.0979 109.059 93.2748 108.439L92.5938 111.403ZM104.138 114.597C106.037 115.006 107.967 115.365 109.926 115.672L110.136 112.592C108.228 112.293 106.35 111.943 104.501 111.545L104.138 114.597ZM115.769 116.422C117.702 116.616 119.661 116.76 121.649 116.851L121.562 113.741C119.623 113.652 117.712 113.512 115.829 113.323L115.769 116.422ZM127.44 116.967C129.366 116.956 131.316 116.896 133.291 116.786L132.935 113.677C131.003 113.785 129.097 113.843 127.217 113.854L127.44 116.967ZM139.031 116.329C140.924 116.133 142.839 115.892 144.777 115.603L144.181 112.518C142.282 112.802 140.406 113.038 138.552 113.229L139.031 116.329ZM150.451 114.632C152.305 114.274 154.179 113.873 156.072 113.428L155.268 110.384C153.407 110.821 151.567 111.215 149.747 111.566L150.451 114.632ZM161.639 112.008C162.576 111.75 163.517 111.481 164.464 111.201L163.519 108.194C162.588 108.469 161.661 108.734 160.739 108.987L161.639 112.008Z'
        fill='url(#paint0_linear_784_72789)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_784_72789'
          x1='142.21'
          y1='103.738'
          x2='-14.3384'
          y2='45.6956'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#BFF0FF' />
          <stop offset='1' stopColor='#82B4FF' />
        </linearGradient>
      </defs>
    </svg>
  );
};
