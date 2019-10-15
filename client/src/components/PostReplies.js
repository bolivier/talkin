import React from "react";
import { useSelector } from "react-redux";
import postRepliesReducer, { postReplySelectors } from "../ducks/postReplies";
import { map } from "lodash/fp";

export function PostReplies({ post }) {
  const postReplies = useSelector(postReplySelectors.replies(post.id));
  return (
    <div className="replies">
      {map(
        reply => (
          <div key={reply.id} className="reply">{reply.content}</div>
        ),
        postReplies
      )}
    </div>
  );
  return <pre>{JSON.stringify(postReplies, null, 2)}</pre>;
}
