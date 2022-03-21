import { AppProps } from 'next/app'
import '../styles/globals.css'
import {
  Provider
} from "react-redux"
import store from "../src/Store/store"


function MyApp({ Component, pageProps}) {
  return (
    <>
      <Provider store = {store} >
         <Component {...pageProps} />
      </Provider>
    </>
  )
}


export default MyApp

