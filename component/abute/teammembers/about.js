import React from 'react';
import { CarOutlined} from '@ant-design/icons'; 
import { Row, Col, Avatar } from 'antd';
import styles from './indexstyles.module.css'
import Image from 'next/image'

const items = [
  {
    key: '1',
    icon:  <Avatar size={100} icon={<Image width='100' height='100' src={'/Hossein.jpg'} />} />,
    title: 'حسین کیان مهر',
    content: ' یبسلیسبل یبسل سیبلیبسل یسبل یبلسشیبشیب سیشب سیشبسیبسیبسشبسیب سشیب شسی مهندس ان وب دولوپر و مهندس انرژی در حوضه ی پیل .',
  },
  {
    key: '2',
    icon: <Avatar size={100} icon={<img alt="Modern Design" src={'https://static01.nyt.com/images/2021/01/13/us/politics/13youtube-photo/merlin_178723944_8bb9182c-c7ac-4bf3-baad-d73561a026cc-jumbo.jpg?quality=90&auto=webp'} />} />,
    title: 'Flat Design',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '3',
    icon: <Avatar size={100} icon={<img alt="Modern Design" src={'https://static01.nyt.com/images/2021/01/13/us/politics/13youtube-photo/merlin_178723944_8bb9182c-c7ac-4bf3-baad-d73561a026cc-jumbo.jpg?quality=90&auto=webp'} />} />,
    title: 'Simplified Workflow',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
]

function TeamMembers() {
  return (
    <div id="about" className={styles.block} >
      <div className={styles.containerfluid}>
        <div className={styles.titleHolder}>
          <h2 className={styles.h2}>تیم</h2>
          
        </div>
        
        <Row gutter={[16, 16]} dir='rtl'>   
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

export default TeamMembers;