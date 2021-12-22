
import '../styles/globals.css'
//import '../styles/mine.css'
//import '../public/font/style.css'

import "bootstrap/dist/css/bootstrap.min.css";

import "antd/dist/antd.css";

import Swiper from 'swiper/bundle';

  // import styles bundle
  import 'swiper/css/bundle';
import Headerpage from '../component/layout/Header/Header';
import Footerpage from '../component/layout/footer';



  



function MyApp({ Component, pageProps }) {
  return(
    <>
    <Headerpage/>
    
    <Component {...pageProps} />
    <Footerpage/>
    </>
    )
}

export default MyApp
