import React from "react";
import ReactDOM from "react-dom";
import ColorPicker from "./components/ColorPicker";

import "./index.css";

const App = () => (
  <div>
    <ColorPicker/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
