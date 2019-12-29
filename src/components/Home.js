import React from "react";
import { Layout, Menu, Breadcrumb, Icon, Button, Dropdown } from "antd";
import Login from "./Login";
import UserBar from "./UserBar";
import Video from "./Video";
const { Header, Content, Footer } = Layout;

const menu = (
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
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    };
  }
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="header-logo">
            <div className="text-white header-text">
              <Icon className="header-text-detail mr-1" type="home" />
              <span className="header-text-detail">
                Funny video
              </span>
            </div>
          </div>
          <div className="header-text">
            <h3 className="text-white">
              {this.state.isLogin ? <UserBar /> : <Login />}
            </h3>
          </div>
        </Header>
        <Content style={{ marginTop: 64 }}>
          <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
            <Button type="primary" shape="round" size="large">
              Load more
            </Button>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Funny Videos © 2019</Footer>
      </Layout>
    );
  }
}
