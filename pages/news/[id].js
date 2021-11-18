import React, {useState} from 'react';
import axios from "axios";
import Newspage from '../../component/news/newspage';


const PostDetail = ({post}) => {
  console.log(post);

  
  
  
  return (
    <div>
      <Newspage post={post}/>
    </div>
  );
};

export async function getStaticProps({params}) {
  const response = await axios.get("http://localhost:8000/api/news/" + params.id);
  return {
    props: {
      post: response.data,
    }
  }
};

export async function getStaticPaths() {
  const response = await axios.get("http://localhost:8000/api/news/");
  const paths = response.data.map(post => `/news/${post.id}`)

  return {
    paths,
    fallback: false
  }
}

export default PostDetail;