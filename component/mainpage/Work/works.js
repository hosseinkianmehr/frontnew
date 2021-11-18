import React, { useRef } from "react";

import { Button, Modal } from "antd";
import styls from "./indexstyles.module.css";
import { CaretRightOutlined} from '@ant-design/icons';
class AppWorks extends React.Component {
  constructor(props) {  
    super(props);  
    this.callRef = React.createRef();  
  }  
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
      <div id="works" className={styls.worksBlock}>
        <div className={styls.containerfluid}>
          <div className={styls.titleHolder}>
            <h2>How it works</h2>
            <p>
              Perspiciatis vero similique, ut ducimus modi ipsam autem tempora
            </p>
          </div>
          <div className={styls.contentHolder}>
            <Button size="middle" onClick={this.showModal}  >
            <CaretRightOutlined />
            </Button>
          </div>
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
              height="350"
              src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU"
            ></iframe>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AppWorks;
