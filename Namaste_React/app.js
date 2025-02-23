import React from "react";
import ReactDOM from "react-dom";


const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I'm a child tag"),
    React.createElement("h1", {}, "I'm another child tag")]
  )
);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React"
);
console.log(parent);
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(parent);
