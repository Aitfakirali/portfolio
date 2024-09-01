import { Container } from '@/components/container';
import { Image, Text } from '@portfolio/ui';

export const University = () => {
  return (
    <Container className='max-w-6xl space-y-20'>
      <div className='flex flex-col gap-5 md:flex-row items-center w-full '>
        <Text
          className='text-transparent bg-gradient-to-r from-[#C0F0FF] to-[#A9FE81] bg-clip-text'
          variant='text-quote/Medium'
        >
          I arrived at the university to complete my bechelor degree at
          methematics and informatics
        </Text>
        <CurvedArrow />
      </div>

      <div className='flex flex-col md:flex-row gap-10 py-10 justify-between'>
        <div className='space-y-6 flex-1 md:max-w-md'>
          <div className='space-y-2'>
            <Text
              variant='text-2xl/Semibold'
              className='bg-clip-text text-transparent bg-gradient-to-r from-[#C0F0FF] to-[#A9FE81]'
            >
              University Hassan II <Text as='span'>(2yrs)</Text>
            </Text>
            <Text className='bg-clip-text text-transparent bg-gradient-to-r from-[#C0F0FF] to-[#A9FE81]'>
              2019 - 2021
            </Text>
          </div>
          <Text variant='text-md/Regular'>
            After completing my studies at the School of Technologies, I decided
            to pursue a bachelor's degree at the university. I enrolled in the
            Faculty of Science at Ben M'sick, and after two years, I earned mys
            diploma.
          </Text>
          <div className='flex gap-5 pe-10'>
            <div className='bg-gray-800/50 p-5'>
              Discovered new cours at mathematics and physics
            </div>
          </div>
        </div>
        <div className='flex-1 flex items-center justify-center py-10'>
          <div className='bg-white p-4 rotate-12 space-y-4'>
            <Image
              src='/fsb0.webp'
              alt=''
              width={400}
              height={300}
              className='aspect-video'
            />
            <Text className='text-black text-center'>
              Faculty of sciences Ben M'sick
            </Text>
          </div>
        </div>
      </div>
    </Container>
  );
};

const CurvedArrow = () => {
  return (
    <svg
      height='456'
      viewBox='0 0 497 456'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-full'
    >
      <path
        d='M5.45806 455.124C4.66954 455.382 3.89008 454.935 3.71711 454.126L0.898303 440.944C0.725327 440.135 1.22434 439.27 2.0128 439.012C2.80133 438.754 3.58079 439.201 3.75376 440.01L6.25935 451.727L17.681 447.99C18.4695 447.732 19.2489 448.179 19.4219 448.988C19.5949 449.797 19.0959 450.662 18.3074 450.92L5.45806 455.124ZM3.91383 452.954C12.0969 438.77 26.4079 426.985 44.8948 416.876C63.3992 406.759 86.2417 398.238 111.686 390.66C162.555 375.51 224.155 364.04 282.774 351.197C341.488 338.333 397.183 324.097 436.563 303.434C456.245 293.106 471.704 281.247 481.442 267.289C491.134 253.396 495.243 237.309 492.06 218.27L494.941 217.469C498.258 237.306 493.97 254.295 483.742 268.954C473.561 283.547 457.577 295.714 437.667 306.161C397.863 327.047 341.78 341.351 283.112 354.205C224.349 367.08 162.964 378.505 112.236 393.613C86.8817 401.164 64.273 409.612 46.0474 419.578C27.8042 429.553 14.1064 440.965 6.37585 454.364L3.91383 452.954ZM492.06 218.27C485.64 179.876 465.213 156.635 439.526 144.215C413.788 131.771 382.717 130.173 355.121 135.258C327.456 140.356 303.639 152.098 292.205 165.94C286.535 172.804 284.002 180.055 285.332 187.285C286.675 194.585 292.016 202.216 302.868 209.553L301.131 212.185C289.983 204.648 283.996 196.483 282.46 188.134C280.911 179.716 283.949 171.466 290.076 164.049C302.235 149.329 326.919 137.383 354.879 132.231C382.908 127.066 414.588 128.656 440.944 141.399C467.35 154.167 488.361 178.114 494.941 217.469L492.06 218.27ZM302.868 209.553C324.558 224.219 344.668 224.213 359.986 215.011C375.357 205.777 386.325 187.034 389.259 163.365C395.119 116.089 368.751 49.5483 281.918 3.69245L283.417 0.918002C370.917 47.1263 398.214 114.617 392.157 163.482C389.133 187.884 377.746 207.739 361.252 217.647C344.706 227.588 323.441 227.27 301.131 212.185L302.868 209.553Z'
        fill='url(#paint0_linear_784_72711)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_784_72711'
          x1='30.7527'
          y1='263.289'
          x2='484.576'
          y2='172.777'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#A9FE81' />
          <stop offset='1' stopColor='#C0F0FF' />
        </linearGradient>
      </defs>
    </svg>
  );
};
