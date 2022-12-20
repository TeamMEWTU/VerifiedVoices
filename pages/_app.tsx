import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Header from '../components/Header'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <ApolloProvider client={client}>
    <SessionProvider session={session}>
      <Toaster />
      <div className='h-screen overflow-y-scroll bg-slate-200'>
        <Header />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
    </ApolloProvider>
  )
}

export default MyApp;
