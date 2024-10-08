import { Layout } from '@portfolio/core';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
  DM_Serif_Display,
  DM_Sans,
  DM_Mono,
  Nanum_Pen_Script,
} from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

import '@/styles/globals.css';
import 'keen-slider/keen-slider.min.css';
import 'react-day-picker/dist/style.css';
import { vclsx } from '@portfolio/ui';

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  variable: '--dm_serif',
  subsets: ['latin'],
});
const dmMono = DM_Mono({
  weight: ['400', '500', '300'],
  variable: '--dm_mono',
  subsets: ['latin'],
});
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--dm_sans',
});

const nanumPan = Nanum_Pen_Script({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--manum_pan',
});

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
    Component.getLayout ??
    ((page: ReactElement) => (
      <Layout
        className={vclsx(
          `${dmSans.variable} ${dmSerif.variable} ${dmMono.variable} ${nanumPan.variable}`,
          dmMono.className,
        )}
      >
        {page}
      </Layout>
    ));
  const componentWithLayout = getLayout(<Component {...pageProps} />);

  return (
    <QueryClientProvider client={queryClient}>
      <SpeedInsights />
      <Hydrate state={pageProps.dehydratedState}>{componentWithLayout}</Hydrate>
      <ReactQueryDevtools position='bottom-right' />
    </QueryClientProvider>
  );
}

export default MyApp;
