import React from "react";
import axios from "axios";
import Cardnews from "../../component/news/cards";
import { Container } from "react-bootstrap";
import Toppagenews from "../../component/news/toppage";

const index = ({ posts }) => {
  console.log(posts)
  return (
    <>
    <Toppagenews/>
    {posts.map(post => (
    <div key={post.id}>
      <Cardnews post={post}  />
      <hr />
    </div>
  ))}
      
    </>
  );
};

export async function getStaticProps() {
  const response = await axios.get("http://localhost:8000/api/news/");
  return {
    props: {
      posts: response.data,
    },
  };
}

export default index;
