
import React from 'react';
import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;
import styles from "./indexstyles.module.css"

function YoutubeSummary() {
  return (
    <div id="feature" className={styles.block}>
      <div className={styles.container_fluid}>
        <div className={styles.titleHolder}>
          <h2>Key Features and Benefits</h2>
          <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Modern Design" src={'https://static01.nyt.com/images/2021/01/13/us/politics/13youtube-photo/merlin_178723944_8bb9182c-c7ac-4bf3-baad-d73561a026cc-jumbo.jpg?quality=90&auto=webp'} />}
            >
              <Meta title="Modern Design" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={'https://static01.nyt.com/images/2021/01/13/us/politics/13youtube-photo/merlin_178723944_8bb9182c-c7ac-4bf3-baad-d73561a026cc-jumbo.jpg?quality=90&auto=webp'} />}
            >
              <Meta title="Clean and Elegant" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={'https://static01.nyt.com/images/2021/01/13/us/politics/13youtube-photo/merlin_178723944_8bb9182c-c7ac-4bf3-baad-d73561a026cc-jumbo.jpg?quality=90&auto=webp'} />}
            >
              <Meta title="Great Support" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={'https://static01.nyt.com/images/2021/01/13/us/politics/13youtube-photo/merlin_178723944_8bb9182c-c7ac-4bf3-baad-d73561a026cc-jumbo.jpg?quality=90&auto=webp'} />}
            >
              <Meta title="Easy to customise" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={'https://static01.nyt.com/images/2021/01/13/us/politics/13youtube-photo/merlin_178723944_8bb9182c-c7ac-4bf3-baad-d73561a026cc-jumbo.jpg?quality=90&auto=webp'} />}
            >
              <Meta title="Unlimited Features" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={'https://static01.nyt.com/images/2021/01/13/us/politics/13youtube-photo/merlin_178723944_8bb9182c-c7ac-4bf3-baad-d73561a026cc-jumbo.jpg?quality=90&auto=webp'} />}
            >
              <Meta title="Advanced Options" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default YoutubeSummary;