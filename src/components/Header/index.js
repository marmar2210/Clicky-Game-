import React from "react";
import "./style.css";

function Header(props){

   return<div className="header" status={props.status} style={{backgroundColor: "lavender"}}>{props.children}</div>;

}
    
  
  export default Header;