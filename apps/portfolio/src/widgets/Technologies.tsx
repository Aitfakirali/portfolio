import { Image } from '@portfolio/ui';
import Marquee from 'react-fast-marquee';

const prefix = '/technologies';

const technologies = [
  '/cache-redis-product-icon.png',
  '/css3.png',
  '/html5.png',
  '/javascript.png',
  '/jquery.png',
  '/nodejs.png',
  '/npm.png',
  '/postgresql.png',
  '/react.png',
  '/redux.png',
  '/sass.png',
  '/typescript.png',
  '/visual-studio-team-services.png',
  '/webpack.png',
  '/yarn.png',
];

export const Technologies = () => {
  return (
    <Marquee direction='right' autoFill>
      {technologies.map((tech, index) => (
        <div className='p-3 bg-black' key={index}>
          <Image
            src={`${prefix}${tech}`}
            alt='tech images'
            width={60}
            height={60}
          />
        </div>
      ))}
    </Marquee>
  );
};
