import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { AppProps } from 'next/app'
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from '../services/queryClient'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dash.Go</title>
      </Head>

      <QueryClientProvider client={queryClient}>
        <ChakraProvider resetCSS theme={theme}>
          <SidebarDrawerProvider>
            <Component {...pageProps} />
          </SidebarDrawerProvider>
        </ChakraProvider>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
