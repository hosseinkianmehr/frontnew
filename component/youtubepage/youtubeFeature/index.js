
import React from 'react';
import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function YoutubeFeature(props) {
  console.log(props.post)
  return (
        
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Modern Design" src={'https://static01.nyt.com/images/2021/01/13/us/politics/13youtube-photo/merlin_178723944_8bb9182c-c7ac-4bf3-baad-d73561a026cc-jumbo.jpg?quality=90&auto=webp'} />}
            >
              <Meta title={props.post.title} />
            </Card>
          </Col>
       
  );
}

export default YoutubeFeature;