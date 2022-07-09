import type { AppProps } from 'next/app'
import type {NextPage} from "next";
import {ReactElement, ReactNode, useEffect, useState } from 'react'
import Layout from "../components/Layout";
import { ThemeProvider } from 'styled-components';
import {getTheme} from "../lib/colorscheme";
import useDarkMode from 'use-dark-mode';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => <Layout>{page}</Layout>)

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const darkMode = useDarkMode()
  if (!mounted) {
    return null
  }

  const colorscheme = getTheme(darkMode.value)

  return <ThemeProvider theme={colorscheme}>
    {getLayout(<Component {...pageProps} />)}
  </ThemeProvider>
}

export default MyApp
