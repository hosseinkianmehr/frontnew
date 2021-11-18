import { Col, Row, Typography } from "antd";
import React from "react";
import styles from "./indexstyles.module.css";
import { TwitterOutlined ,YoutubeOutlined ,GithubOutlined} from "@ant-design/icons";
const { Text, Link } = Typography;
function Footerpage() {
  return (
    <Row  className={styles.base}>
      <div
       className={styles.div}
        
      >
        <Col span={24} styles={{ backgroundColor: "blue" }}>
          <Row className={styles.Row}>
            <YoutubeOutlined  className={styles.icon} />
            <Link href="https://ant.design" className={styles.Link}>
            youtube
            </Link>
          </Row>
        </Col>
        <Col span={24} styles={{ backgroundColor: "blue" }}>
          <Row className={styles.Row}>
            <TwitterOutlined className={styles.icon} />
            <Link href="https://ant.design" className={styles.Link}>
            twitter
            </Link>
          </Row>
        </Col>
        <Col span={24} styles={{ backgroundColor: "blue" }}>
          <Row className={styles.Row}>
          <GithubOutlined  className={styles.icon} />
            <Link href="https://ant.design" className={styles.Link}>
              Github
            </Link>
          </Row>
        </Col>
      </div>
    </Row>
  );
}

export default Footerpage;
