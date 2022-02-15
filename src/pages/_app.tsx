import type { AppProps } from 'next/app'
import GlobalStyle from '~/styles/global'
import { ThemeProvider } from 'styled-components'
import defaultTheme from '~/styles/themes/default'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
