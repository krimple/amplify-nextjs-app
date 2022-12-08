import Layout from '../components/layout';
import {Amplify} from '@aws-amplify/core';
import awsExports from '../src/aws-exports';
import '@aws-amplify/ui-react/styles.css';
import Head from 'next/head';
import {Authenticator} from '@aws-amplify/ui-react';
import {useEffect, useState} from 'react';

export default function MyApp({ Component, pageProps}: any) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    function doSomething() {
      Amplify.configure({
        ...awsExports, ssr: true
      });
      setLoaded(true);
    }
    doSomething();
  },[]);
  if (!loaded) return null;
  return (
    <>
    <Head>
      <title>Amplify Next.js Demo</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <Layout>
      <Authenticator> <Component {...pageProps} /></Authenticator>
    </Layout>
    </>
  );
}