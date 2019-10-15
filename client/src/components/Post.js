import React from "react";
import "./post.scss";

export function Post({ post }) {
  return (
    <div>
      <h3 className="post-title">{post.title}</h3>
      <p className="post-content">{post.content}</p>
    </div>
  );
}
