import React, { Fragment } from 'react';
import Head from 'next/head';

function App({ Component, pageProps }) {

  return (
    <Fragment>
        <Head></Head>
        <Component {...pageProps} />
    </Fragment>
  );
}

export default App;
