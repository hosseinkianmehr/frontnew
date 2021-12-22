import React, {useState} from 'react';
import axios from "axios";
import Blogpage from '../../component/blog/blogpage';


const PostDetail = ({post}) => {
  console.log(post);

  
  
  
  return (
    <div>
      <Blogpage post={post}/>
    </div>
  );
};

export async function getStaticProps({params}) {
  const response = await axios.get("http://localhost:8000/api/blog/" + params.id);
  return {
    props: {
      post: response.data,
    }
  }
};

export async function getStaticPaths() {
  const response = await axios.get("http://localhost:8000/api/blog/");
  const paths = response.data.map(post => `/blog/${post.id}`)

  return {
    paths,
    fallback: false
  }
}

export default PostDetail;