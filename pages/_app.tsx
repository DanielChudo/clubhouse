import React, { FC } from 'react';
import '../styles/reset.css';
import '../styles/globals.css';
import '../components/steps/steps.css';
import { AppProps } from 'next/app';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default App;
