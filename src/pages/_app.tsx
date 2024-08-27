import type { AppProps } from "next/app";
import Head from "next/head";
import "styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>H A C K E R B O A R D</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
