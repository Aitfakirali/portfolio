import { Layout } from '@portfolio/core';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import '@/styles/globals.css';
import 'keen-slider/keen-slider.min.css';
import 'react-day-picker/dist/style.css';

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );
  const getLayout =
    Component.getLayout ?? ((page: ReactElement) => <Layout>{page}</Layout>);
  const componentWithLayout = getLayout(<Component {...pageProps} />);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>{componentWithLayout}</Hydrate>
      <ReactQueryDevtools position='bottom-right' />
    </QueryClientProvider>
  );
}

export default MyApp;
