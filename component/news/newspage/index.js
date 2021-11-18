import { UserOutlined } from "@ant-design/icons";
import { Col, Grid, Row, Image, Typography, PageHeader, Rate, Avatar, Button } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";

function Newspage(props) {
  return (
    <Row
      style={{
        marginLeft: "7%",
        marginRight: "7%",
        marginTop: 20,
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <Image src="http://s3.picofile.com/file/7367881505/methanol.jpg" width="100%" ></Image>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <div style={{ margin: 20 }}>
          <Typography.Title dir="rtl">
            Follow on YouTube Follow on YouTube Follow on YouTube
          </Typography.Title>
          <Typography.Paragraph dir="rtl">
            Follow on YouTube dsadgfasdf sadfsadf saf sda fd fs df sad fadfsda
            fsadfsdafsadf sadf sdaf ds fsd f sdaf asdf sadf saf
          </Typography.Paragraph>
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <div style={{ marginTop: 20 }}>
          {" "}
          <Typography.Paragraph dir="rtl">
            {props.post.titel}
          </Typography.Paragraph>
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <div >
          <PageHeader
            ghost={false}
            
            title="Title"
            subTitle="This is a subtitle"
            extra={ 
              <Row>
              <Typography.Paragraph
                style={{ marginTop: 10, marginRight: 10 }}
              >
                asfdfsadfas
              </Typography.Paragraph>
              <Avatar size="large"  icon={<UserOutlined />} />
            </Row>
            }
          >
            <Rate allowHalf defaultValue={2.5} />
          </PageHeader>
        </div>
      </Col>
    </Row>
  );
}

export default Newspage;
