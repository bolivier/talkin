import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PostPage } from './components/PostPage';
import { NewPostPage } from './components/NewPostPage';
import ReactDOM from 'react-dom';
import { Header } from './components/Header';
import { ForumList } from './components/ForumList';
import './scss/app.scss';
import { createStore } from 'redux';
import rootReducer from './ducks/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/posts/new">
                <NewPostPage />
              </Route>
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

let el = document.getElementById('app');

ReactDOM.render(<App />, el);
