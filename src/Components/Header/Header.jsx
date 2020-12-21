import React from "react";
import { Icon } from "semantic-ui-react";
 import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="navbar">
        {" "}
        <Icon name="github" size="large" verticalAlign="middle"></Icon>
         GitHub Search
      </div>
    </header>
  );
};

export default Header;
