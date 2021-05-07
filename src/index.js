import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import Badge from "./components/Badge";

ReactDOM.render(
  <React.StrictMode>
    <Badge
      firstName="Edilberto"
      lastName="Vazquez"
      jobTitle="Systems and IT engineer"
      twitter="No tengo twitter"
    />
  </React.StrictMode>,
  document.getElementById("root")
);
