import React from "react";
import { Layout, Menu, Breadcrumb, Icon, Input, Button } from "antd";

export default class UserBar extends React.Component {
  render() {
    return (
      <div className="login mt-2">
        <span className="text-white user-bar-text">
          Wellcome phanlequang99@gmail.com
        </span>
        <Button type="primary" shape="round" className="ml-2">
          Share a movie
        </Button>
        <Button shape="round" type="danger" className="ml-2">
          Logout
        </Button>
      </div>
    );
  }
}
