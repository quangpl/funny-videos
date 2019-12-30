import React from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Input,
  Button,
  Dropdown,
  Modal
} from "antd";
import MediaQuery from "react-responsive";

const menu = () => {
  return (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );
};

export default class UserBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }
  render() {
    return (
      <div className="login mt-2">
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onCancel={() => {
            this.setState({
              visible: false
            });
          }}
        >
          <p>Some contents...</p>
        </Modal>
        <MediaQuery maxWidth={425}>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link text-menu mt-1" href="#">
              Menu <Icon type="down" />
            </a>
          </Dropdown>
        </MediaQuery>
        <MediaQuery minWidth={426}>
          <span className="text-white user-bar-text">
            Wellcome phanlequang99@gmail.com
          </span>
          <Button
            type="primary"
            shape="round"
            className="ml-2"
            onClick={() => {
              this.setState({
                visible: true
              });
            }}
          >
            Share a movie
          </Button>
          <Button shape="round" type="danger" className="ml-2">
            Logout
          </Button>
        </MediaQuery>
      </div>
    );
  }
}
