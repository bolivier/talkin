import React from "react";
import './postLink.scss';

export function PostTitle({ post }) {
  return <span className="post-link-title">{post.title}</span>;
}
