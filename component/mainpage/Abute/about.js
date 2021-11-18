import React from 'react';
import { CarOutlined} from '@ant-design/icons'; 
import { Row, Col } from 'antd';
import styles from './indexstyles.module.css'
const items = [
  {
    key: '1',
    icon: <CarOutlined />,
    title: 'High Performance',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '2',
    icon: <CarOutlined />,
    title: 'Flat Design',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '3',
    icon: <CarOutlined />,
    title: 'Simplified Workflow',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
]

function AppAbout() {
  return (
    <div id="about" className={styles.block}>
      <div className={styles.containerfluid}>
        <div className={styles.titleHolder}>
          <h2 className={styles.h2}>About Us</h2>
          <p className={styles.p}>dolor sit amet, consectetur adipisicing elit</p>
        </div>
        <div className={styles.contentHolder}>
          <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit necessitatibus officiis repudiandae est deserunt delectus dolorem iure porro distinctio fuga, nostrum doloremque. Facilis porro in laborum dolor amet ratione hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam aut a porro, adipisci quidem sint enim pariatur ducimus, saepe voluptatibus inventore commodi! Quis, explicabo molestias libero tenetur temporibus perspiciatis deserunt.</p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    {item.icon}
                  </div>
                  <h3 className={styles.h3}>{item.title}</h3>
                  <p className={styles.p}>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;