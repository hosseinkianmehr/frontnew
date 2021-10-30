import '../styles/globals.css'

import "bootstrap/dist/css/bootstrap.min.css";

import "antd/dist/antd.css";

import Swiper from 'swiper/bundle';

  // import styles bundle
  import 'swiper/css/bundle';
import Headerpage from '../component/layout/Header/Header';



  



function MyApp({ Component, pageProps }) {
  return(
    <>
    <Headerpage/>
    
    <Component {...pageProps} />
    </>
    )
}

export default MyApp
