import React from "react";
import "./ForumList.scss";
import { PostLink } from "./PostLink";
import { useSelector } from "react-redux";
import { postSelectors } from "../ducks/posts";

export function ForumList() {
  const posts = useSelector(postSelectors.posts);
  return (
    <div className="forum-list">
      <PostLink post={posts["1"]} />
    </div>
  );
}
