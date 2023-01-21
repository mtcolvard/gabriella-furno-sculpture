import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Cormorant_Infant} from '@next/font/google'
import { Cormorant } from '@next/font/google'
import { Roboto_Mono } from '@next/font/google'
import { Fragment_Mono } from '@next/font/google'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const cormorant = Cormorant_Infant({
  subsets: ['latin'],
  weight: ['500']
  // variable: '--font-cormorant',
})

const robotot = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400']
})

const fragmentMono = Fragment_Mono({
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
