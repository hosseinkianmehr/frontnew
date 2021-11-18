import React from 'react'
import YoutubeSummary from '../component/mainpage/YoutubeSummary'


import Swipers from '../component/mainpage/swiper/swiper'
import BlogSummary from '../component/mainpage/BlogSummary'
import AppWorks from '../component/mainpage/Work/works'
import AppAbout from '../component/mainpage/Abute/about'
import { Divider } from 'antd'


function index() {
  return (
    <>
    
    <Swipers/>
    <AppAbout/>
    <Divider style={{marginBottom:'5hv' , marginTop:'5hv'}}>اخرین ها</Divider>
    <BlogSummary/>
    <AppWorks/>
    <YoutubeSummary/>
    </>
  )
}

export default index
