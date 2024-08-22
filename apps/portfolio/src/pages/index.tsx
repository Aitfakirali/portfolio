import { Seo } from '@portfolio/core';
import * as React from 'react';

export default function Page() {
  return (
    <>
      <Seo templateTitle='Starter' />
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
