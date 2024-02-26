import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "head", className: "heading" },
  "hello world"
);
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(heading);
