import React from "react";
import { Icon } from "semantic-ui-react";
 import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="navbar">
        {" "}
        <Icon name="github" size="large" verticalAlign="middle"></Icon>
         <a href="/"> 
         GitHub Search
           </a>
      </div>
    </>
  );
};

export default Header;
