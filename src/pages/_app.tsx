import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/globalsStyles'
import 'leaflet/dist/leaflet.css'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {

   return (
      <>
         <RecoilRoot>
            <GlobalStyles />
            <Component {...pageProps} />
         </RecoilRoot>
      </>
   )
}

export default MyApp
