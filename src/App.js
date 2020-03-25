import React from "react";
import Routes from "./navigation/routes"; 
import Header from "./../src/component/reusable/header";
 
function App() {
  return (
    <div className="App">
      <Header />
      <Routes /> 
    </div>
  );
}

export default App;
