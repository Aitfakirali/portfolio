import { Technologies, Hero, MyJourney, Contact } from '@/widgets';
import { Seo } from '@portfolio/core';
import * as React from 'react';

export default function Page() {
  return (
    <>
      <Seo templateTitle='Home page' />
      <main className=''>
        <Hero />
        <Technologies />
        <MyJourney />
        <Contact />
      </main>
    </>
  );
}

// export async function getServerSideProps() {
//   // let session = await getServerSession(context.req, context.res, authOptions);
//   // session = JSON.parse(JSON.stringify(session));
//   const queryClient = new QueryClient();

//   return {
//     props: {
//       // session,
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }
