import { Seo } from '@portfolio/core';
import { Button, Heading, Icon } from '@portfolio/ui';

export default function NotFoundPage() {
  return (
    <>
      <Seo templateTitle='Not Found' />
      <main>
        <section className='bg-white'>
          <div className='flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <Icon id='car-crush2' className='size-20 text-red-500' />
            <Heading>Page Not Found</Heading>
            <Button className='mt-4 md:text-lg' href='/'>
              Back to Home
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
