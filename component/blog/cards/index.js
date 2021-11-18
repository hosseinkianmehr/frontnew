/* eslint-disable jsx-a11y/alt-text */
import { Card, Col, Image, Row, Typography } from "antd";
import ExportTypography from "antd/lib/typography/Typography";
import React from "react";

function Cardblog(props) {
  console.log(props.post)
  console.log('welcome')
  return (
    <>
      <Card style={{ backgroundColor:'green', margin:'12px'  }}>
        <Row   style={{ direction: "rtl" , maxHeight:'400px' }}>
          <Col xs={24} sm={6} md={6} lg={6} xl={6} style={{justifyContent:'center' ,display:'flex'}} >
            <Image
              src="http://s3.picofile.com/file/7367881505/methanol.jpg"
              style={{ direction: "rtl" , maxHeight:200}}
            ></Image>
          </Col>
          <Col xs={24} sm={18} md={18} lg={18} xl={18}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Typography.Title style={{ direction: "rtl" }}>
                {props.post.minetitel}
              </Typography.Title>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Typography.Paragraph style={{ direction: "rtl" }}>
              {props.post.titel1}
              </Typography.Paragraph>
            </Col>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default Cardblog;
