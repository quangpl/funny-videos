import React from "react";
import { Layout, Menu, Breadcrumb, Icon, Button} from "antd";
import Login from "./Login";
import UserBar from "./UserBar";
import Video from "./Video";
const { Header, Content, Footer } = Layout;
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
              <h3>
                <Icon className="text-white" type="home" />
              </h3>
              <h3 className="mt-2 ml-2 text-white">Funny video</h3>
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
            <Button type="primary" shape="round" size="large">Load more</Button>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Funny Videos © 2019</Footer>
      </Layout>
    );
  }
}
