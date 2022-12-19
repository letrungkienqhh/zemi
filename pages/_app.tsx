import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import "../styles/globals.css";
function MyApp({ Component, pageProps:{session,...pageProps} }: any) {
  return  <SessionProvider session={session}>
              <Component {...pageProps} />
          </SessionProvider>
}

export default MyApp
