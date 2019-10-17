import React from "react";
import { useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import { postSelectors } from "../ducks/posts";
import { Post } from "./Post";
import { PostReplies } from "./PostReplies";
import { PostDraftingInputArea } from './PostDraftingInputArea';

export function PostPage() {
  const {
    params: { postId }
  } = useRouteMatch();
  const post = useSelector(postSelectors.post(postId));
  return (
    <div className="post-page-container">
      <Post post={post} />
      <PostReplies post={post} />
      <PostDraftingInputArea postId={post.id} />
    </div>
  );
}
