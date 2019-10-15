import { combineReducers } from "redux";
import postsReducer from "./posts";
import postRepliesReducer from "./postReplies";

export default combineReducers({
  posts: postsReducer,
  postReplies: postRepliesReducer
});
