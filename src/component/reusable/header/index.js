import React from "react";
import "./style.css";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
function Header() {
  return (
    <header className="header">
      <Button
        component={RouterLink}
        to="/"
         >
      <img alt="" src="https://static.freighthub.com/icons/logo.svg" />
      </Button>
    </header>
  );
}
export default Header;
