import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PostPage } from "./components/PostPage";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { ForumList } from "./components/ForumList";
import "./scss/app.scss";
import { createStore } from "redux";
import rootReducer from "./ducks/rootReducer";
import { Provider } from "react-redux";

function HelloMessage() {
  return (
    <Provider store={createStore(rootReducer)}>
      <Router>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/posts/:postId">
                <PostPage />
              </Route>
              <Route exact path="/">
                <ForumList />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

let el = document.getElementById("app");

ReactDOM.render(<HelloMessage name="Yomi" />, el);
