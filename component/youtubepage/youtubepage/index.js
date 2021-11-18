/* eslint-disable jsx-a11y/alt-text */
import { UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  Image,
  Modal,
  PageHeader,
  Rate,
  Row,
  Typography,
} from "antd";
import React from "react";

class Youtubepage extends React.Component {
  
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  

  render() {
    
    return (
      <Row
        dir="rtl"
        style={{
          marginLeft: "7%",
          marginRight: "7%",
          marginTop: 20,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Typography.Title>titiel1</Typography.Title>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={24}
          style={{ display: "block", textAlign: "center" }}
        >
          <Image
            src="http://s3.picofile.com/file/7367881505/methanol.jpg"
            onClick={this.showModal}
            preview={false}
          />
          <Modal
            title="Woocommerce Tutorial"
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={null}
            destroyOnClose={true}
            //animation={false}
            //slide={false}
            //fade={false}
            //transition={false}
          >
            <iframe
              title="Woocommerce Tutorial"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU"
            ></iframe>
          </Modal>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}  style={{ display: "block", textAlign: "center" }}>
        <Button>دیدن پیچ</Button>
        <Button>دیدن ویدیو</Button>
        <Button>دیدن ویدیو در یوتیوب</Button>
      </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} dir="ltr">
          <div>
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
}

export default Youtubepage;
