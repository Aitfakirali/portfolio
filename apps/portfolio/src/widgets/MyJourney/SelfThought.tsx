import { Container } from '@/components/container';
import { Image, Text } from '@portfolio/ui';
import React from 'react';

export const SelfThought = () => {
  return (
    <Container>
      <div className='relative'>
        <WaveArrow />
        <div className='md:absolute py-10 md:top-1/2 md:-translate-y-1/2 right-10'>
          <Text
            className='md:max-w-md font-primary text-transparent bg-gradient-to-r to-[#FEBD81] from-[#BFF4A6] bg-clip-text'
            variant='text-quote/Medium'
          >
            After earning my bachelor's degree, I began learning React.js and
            Next.js by cloning the websites of major companies, such as
            Instagram, Hulu, and WhatsApp Web.
          </Text>
        </div>
      </div>
      <div className='flex flex-col md:items-center md:flex-row gap-10 py-10 justify-between'>
        <div className='space-y-6 flex-1 md:max-w-md'>
          <div className='space-y-2'>
            <Text
              variant='text-2xl/Semibold'
              className='bg-clip-text text-transparent bg-gradient-to-r to-[#FEBD81] from-[#BFF4A6]'
            >
              VOID
            </Text>
            <Text className='bg-clip-text text-transparent bg-gradient-to-r to-[#FEBD81] from-[#BFF4A6]'>
              2021 - Now
            </Text>
          </div>
          <Text className='text-justify' variant='text-md/Regular'>
            I started a new job at VOID two and a half years ago as a junior
            frontend developer. In this role, I focused on building modern
            applications using cutting-edge technologies like React.js and
            Next.js. During my time there, I also gained experience with Docker
            and Git, and I learned how to deploy projects on servers. This
            position has allowed me to expand my skill set and grow as a
            developer, working on a variety of challenging projects.
          </Text>
          <div className='flex gap-5 flex-wrap'>
            <div className='flex-1 w-full basis-full bg-gray-800/50 p-5'>
              Create stunning designs
            </div>
            <div className='flex-1 basis-full bg-gray-800/50 p-5'>
              Build & deploy applications using github workflows
            </div>
            <div className='flex-1 basis-full bg-gray-800/50 p-5'>
              Build images with Docker
            </div>
          </div>
        </div>

        <div className='relative flex-1 flex flex-col items-center justify-center py-10'>
          <PointerArrow />
          <div className='bg-white p-4 -rotate-12 space-y-4'>
            <Image
              src='/ramdan_1.webp'
              alt=''
              width={400}
              height={600}
              // className='aspect-square'
            />
            {/* <Text className='text-black text-center'>Ramadan 2023</Text> */}
          </div>
          <div className='bg-white p-4 rotate-12 space-y-4'>
            <Image
              src='/ramdan_2.jpg'
              alt=''
              width={400}
              height={600}
              className='object-cover'
            />
            {/* <Text className='text-black text-center'>Ramadan 2023</Text> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

const PointerArrow = () => {
  return (
    <div className='absolute hidden md:block bottom-0 right-24 z-10 -rotate-45'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='73'
        height='233'
        viewBox='0 0 73 233'
        fill='none'
      >
        <path
          d='M31.7642 0.72414C32.5927 0.724995 33.2635 1.39726 33.2627 2.22569L33.2487 15.7257C33.2479 16.5541 32.5756 17.225 31.7472 17.2241C30.9188 17.2233 30.2479 16.551 30.2487 15.7226L30.2611 3.72259L18.2611 3.71019C17.4327 3.70934 16.7618 3.03707 16.7627 2.20865C16.7636 1.38022 17.4358 0.70934 18.2642 0.710195L31.7642 0.72414ZM71.9295 229.988C72.6358 230.421 72.8573 231.344 72.4243 232.05C71.9913 232.757 71.0678 232.978 70.3615 232.545L71.9295 229.988ZM32.8223 3.28589C7.63961 28.4166 -1.2729 73.6137 5.57945 118.488C12.4257 163.322 34.9378 207.31 71.9295 229.988L70.3615 232.545C32.3832 209.263 9.54562 164.335 2.61383 118.941C-4.31188 73.5862 4.56919 27.2424 30.7031 1.16238L32.8223 3.28589Z'
          fill='url(#paint0_linear_1035_6199)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_1035_6199'
            x1='83.9278'
            y1='56.2681'
            x2='5.85767'
            y2='194.355'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#BFF4A6' />
            <stop offset='1' stopColor='#FEBD81' />
          </linearGradient>
        </defs>
      </svg>

      <Text
        className='md:max-w-md text-md text-transparent bg-gradient-to-r from-[#FEBD81] to-[#BFF4A6] bg-clip-text absolute -right-32 -bottom-20 rotate-45'
        variant='text-quote/Medium'
      >
        Thats Me
      </Text>
    </div>
  );
};

const WaveArrow = () => {
  return (
    <svg
      width='375'
      height='534'
      viewBox='0 0 100% 100%'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='mr-auto'
    >
      <path
        d='M163.998 409.369L163.052 408.234L163.998 409.369ZM294.998 239.869L294.944 241.441L294.998 239.869ZM13.7274 533.221C14.3883 533.664 15.2698 533.418 15.6961 532.671L22.6441 520.501C23.0704 519.755 22.8802 518.79 22.2193 518.347C21.5583 517.904 20.6769 518.15 20.2505 518.897L14.0746 529.715L4.50046 523.298C3.8395 522.855 2.95801 523.102 2.53169 523.848C2.10531 524.595 2.29549 525.56 2.95645 526.003L13.7274 533.221ZM294.944 241.441C322.62 241.441 341.282 238.093 353.075 232.029C358.997 228.983 363.254 225.22 366.026 220.783C368.805 216.334 370.017 211.326 370.017 205.938C370.017 195.264 365.258 182.963 358.392 169.967C351.503 156.926 342.342 142.918 333.296 128.825C324.228 114.697 315.269 100.472 308.682 86.8839C302.08 73.2646 297.969 60.495 298.39 49.2613C298.805 38.1957 303.625 28.4263 315.385 20.6345C327.247 12.774 346.15 6.95475 374.574 4.1091L374.423 0.977644C345.847 3.83843 326.421 9.71543 313.987 17.9544C301.45 26.262 296.004 36.9953 295.544 49.249C295.091 61.3345 299.496 74.7008 306.159 88.4473C312.838 102.225 321.894 116.595 330.952 130.706C340.031 144.852 349.104 158.728 355.918 171.626C362.755 184.569 367.168 196.264 367.168 206.056C367.168 210.901 366.087 215.243 363.7 219.064C361.306 222.897 357.524 226.322 351.953 229.187C340.762 234.942 322.626 238.297 295.051 238.297L294.944 241.441ZM163.052 408.234C156.729 414.697 148.916 417.209 140.02 417.082C131.089 416.955 121.156 414.166 110.758 410.112C100.367 406.061 89.6314 400.798 79.0714 395.782C68.5431 390.782 58.1851 386.026 48.6602 383.071C39.1622 380.124 30.2864 378.898 22.7851 381.18C15.1542 383.503 9.15663 389.388 5.40088 400.07C1.67965 410.654 0.133597 425.991 1.23369 447.452C2.33527 468.943 6.09923 496.717 13.1072 532.258L15.8915 531.48C8.89989 496.022 5.1675 468.423 4.07748 447.157C2.98598 425.863 4.5531 411.061 8.0513 401.111C11.5149 391.26 16.843 386.219 23.4455 384.21C30.1775 382.161 38.4428 383.198 47.7951 386.1C57.1206 388.994 67.322 393.671 77.8639 398.678C88.3741 403.67 99.2197 408.988 109.721 413.082C120.217 417.173 130.488 420.092 139.877 420.226C149.3 420.36 157.919 417.686 164.944 410.504L163.052 408.234ZM164.944 410.504C179.706 395.414 186.521 377.08 190.67 358.257C192.742 348.856 194.156 339.295 195.554 329.953C196.954 320.588 198.337 311.449 200.347 302.781C204.361 285.472 210.829 270.257 224.713 259.306C238.642 248.32 260.266 241.441 294.944 241.441L295.051 238.297C260.101 238.297 237.766 245.215 223.115 256.771C208.419 268.362 201.688 284.435 197.589 302.11C195.543 310.935 194.141 320.211 192.744 329.555C191.343 338.921 189.945 348.361 187.903 357.623C183.826 376.124 177.212 393.76 163.052 408.234L164.944 410.504Z'
        fill='url(#paint0_linear_784_62564)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_784_62564'
          x1='233.048'
          y1='329.857'
          x2='113.226'
          y2='174.567'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FEBD81' />
          <stop offset='0.489583' stopColor='#FFE598' />
          <stop offset='1' stopColor='#BFF4A6' />
        </linearGradient>
      </defs>
    </svg>
  );
};
