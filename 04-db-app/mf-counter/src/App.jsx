import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter"

import "./index.scss";

const App = () => (
  <div className="mt-10 text-center">
    <Counter initialCounter={10}/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
