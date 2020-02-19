import React from 'react';
import { AppProps } from 'next/app';
import APIClientContext, { apiClient } from '../components/APIClientContext';
import '../components/main.global.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <APIClientContext.Provider value={apiClient}>
    <Component {...pageProps} />
  </APIClientContext.Provider>
);

export default MyApp;
