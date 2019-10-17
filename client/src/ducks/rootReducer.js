import { combineReducers } from "redux";
import postsReducer from "./posts";
import postRepliesReducer from "./postReplies";
import draftReducer from './draft';

export default combineReducers({
  posts: postsReducer,
  postReplies: postRepliesReducer,
  draft: draftReducer
});
