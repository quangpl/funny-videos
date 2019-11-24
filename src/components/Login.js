import React from "react";
import { Layout, Menu, Breadcrumb, Icon, Input, Button } from "antd";

export default class Login extends React.Component {
  render() {
    return (
      <div className="login mt-2">
        <Input placeholder="email" className="mr-2" />
        <Input placeholder="password" className="ml-1 mr-1" />
        <Button shape="round" className="ml-2">
          Login
        </Button>
        <Button shape="round" type="primary" className="ml-2">
          Register
        </Button>
      </div>
    );
  }
}