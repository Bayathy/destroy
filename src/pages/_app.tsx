import type { AppProps } from "next/app";
import GlobalStyles from "../styles/globalsStyles";
import "leaflet/dist/leaflet.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <><GlobalStyles/><Component {...pageProps} /></>
}

export default MyApp;
