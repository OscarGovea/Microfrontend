import React from "react";
import ReactDOM from "react-dom";
import ColorList from "./components/ColorList";
//import "./index.css";

const App = () => (
  <div className="container">
    <ColorList/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
