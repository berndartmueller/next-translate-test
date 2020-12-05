import React, { Fragment } from 'react';

function App({ Component, pageProps }) {

  return (
    <Fragment>
        <Component {...pageProps} />
    </Fragment>
  );
}

export default App;
