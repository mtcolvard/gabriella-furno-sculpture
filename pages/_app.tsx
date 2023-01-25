import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto_Mono } from '@next/font/google'

const robotot = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400']
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${robotot.className}`}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
