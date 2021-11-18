import React, {useState} from 'react';
import axios from "axios";
import Youtubepage from '../../component/youtubepage/youtubepage';


const PostDetail = ({post}) => {
  console.log(post);

  
  
  
  return (
    <div>
      {post.minetitel} salam\
      <Youtubepage/>
    </div>
  );
};

export async function getStaticProps({params}) {
  const response = await axios.get("http://localhost:8000/api/youtube/" + params.id);
  return {
    props: {
      post: response.data,
    }
  }
};

export async function getStaticPaths() {
  const response = await axios.get("http://localhost:8000/api/youtube/");
  const paths = response.data.map(post => `/youtube/${post.id}`)

  return {
    paths,
    fallback: false
  }
}

export default PostDetail;