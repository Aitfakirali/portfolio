import getConfig from 'next/config';
import { Head, Html, Main, NextScript } from 'next/document';
const { publicRuntimeConfig } = getConfig();

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='preload'
          href={`${publicRuntimeConfig?.basePath}/fonts/inter-var-latin.woff2`}
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
