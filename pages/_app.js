import { AppProps } from 'next/app'
import '../styles/globals.css'
import Script from "next/script";
import Head from "next/head";
import {
  Provider
} from "react-redux"
import store from "../src/Store/store"


function MyApp({ Component, pageProps}) {
  return (
    <>
      <Head> 
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      
      <Provider store = {store} >
          <Component {...pageProps} />
      </Provider>
    </>
  )
}


export default MyApp

