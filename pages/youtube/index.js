import React from "react";
import axios from "axios";
import Toppageyoutube from "../../component/youtubepage/toppage";
import YoutubeFeature from "../../component/youtubepage/youtubeFeature";
import { Col, Row } from "antd";
const index = ({ posts }) => {
  console.log("hello");
  console.log("posts");
  return (
    <>
      <Toppageyoutube />
      <div id="feature"  style={{padding: '60px 0',borderBottom: '1px solid #d9d9d9'}}>
        <div  style={{margin:'0 auto' , maxWidth: '1200px',padding:' 0 15px'}}>
        <Row gutter={[16, 16]}>
          {posts.map((post) => (
            
              <YoutubeFeature post={post} key={post.id}/>
           
          ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const response = await axios.get("http://localhost:8000/api/youtube/");
  return {
    props: {
      posts: response.data,
    },
  };
}
export default index;
