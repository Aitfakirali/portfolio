import { Badge, Image, Link, Text } from '@portfolio/ui';
import React from 'react';

const items = [
  {
    title: 'Dar Al Moukawil',
    image: '/work/daralmoukawil.png',
    demoUrl: 'https://daralmoukawil.com/fr/',
    // company: 'Attijariwafa Bank',
    technologies: ['Drupal', 'Nextjs', 'Tailwindcss'],
  },
  {
    title: 'Bourse Casablanca',
    image: '/work/boursecasablanca.png',
    demoUrl: 'https://www.casablanca-bourse.com/fr',
    technologies: ['Drupal', 'Nextjs', 'Tailwindcss'],
  },
  {
    title: 'WeConnect Intranet',
    image: '/work/weconnectintranet.png',
    technologies: ['Tailwindcss', 'Nextjs', 'AzureAd'],
  },
];

export const Work = () => {
  return (
    <div className='px-10 space-y-10'>
      <Text
        as='h2'
        variant='text-4xl/Medium'
        className='font-primary text-center'
      >
        Latest Work
      </Text>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
        {items.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

const Card = ({
  title,
  image,
  demoUrl,
  technologies,
}: {
  title: string;
  image: string;
  demoUrl?: string;
  technologies: string[];
}) => {
  const Wrapper = demoUrl ? Link : 'div';

  return (
    <Wrapper href={demoUrl} target='_blank'>
      <div className='shadow-sm bg-white group overflow-hidden flex flex-col'>
        <Image
          src={image}
          alt=''
          height={500}
          width={500}
          className='aspect-video border-b w-full border-gray-100 transition duration-200 group-hover:scale-105'
        />
        <div className='p-5 flex-1 space-y-5'>
          <Text variant='text-lg/Regular'>{title}</Text>
          <div className='flex flex-wrap gap-3'>
            {technologies.map((tech) => (
              <Badge key={tech} label={tech} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
