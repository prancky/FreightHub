import React from "react";
import "./style.css";

function banner({ route }) {
  return (
    <div className="background">
      <h1 className="headding"> {route} </h1>
    </div>
  );
}

export default banner;
