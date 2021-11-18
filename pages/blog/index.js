import React from "react";
import axios from "axios";
import Toppageblog from "../../component/blog/toppage";
import Cardblog from "../../component/blog/cards";

const index = ({ posts }) => {
  console.log("hello");
  console.log(posts);
  console.log(posts.map(post => (
    <div key={post.id}>
      <Cardblog post={post}  />
      <hr />
    </div>
  )));
  return (
    <>
      <Toppageblog />

      {posts.map(post => (
    <div key={post.id}>
      <Cardblog post={post}  />
      <hr />
    </div>
  ))}
    </>
  );
};

export async function getStaticProps() {
  const response = await axios.get("http://localhost:8000/api/blog/");
  return {
    props: {
      posts: response.data,
    },
  };
}
export default index;
