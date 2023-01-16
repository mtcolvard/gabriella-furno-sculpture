import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import { Cormorant_Infant} from '@next/font/google'
import { Cormorant } from '@next/font/google'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-cormorant',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${cormorant.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
