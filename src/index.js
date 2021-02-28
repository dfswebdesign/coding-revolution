import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.css";

import Header from "./components/header";

// Created a component which is a function which return some JSX codes
const App = () => (
  <>
    <Header />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
