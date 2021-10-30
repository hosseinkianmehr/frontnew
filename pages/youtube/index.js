import React from 'react';
import axios from "axios";

const index = ({posts}) => {
    return (
       <>
       
       </>
    );
};

export async function getStaticProps() {
    return {
      props: {
        posts: 1
      }
    }
  };
export default index;