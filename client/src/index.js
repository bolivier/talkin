import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import { ForumList } from "./components/ForumList";
import "./scss/app.scss";

function HelloMessage() {
  return (
    <div>
      <Header />
      <div className="container">
        <ForumList />
      </div>
    </div>
  );
}

let el = document.getElementById("app");

ReactDOM.render(<HelloMessage name="Yomi" />, el);
