import React, { useReducer } from "react";
import { useCyclicRefresh } from "../utils/useCyclicRefresh";
import { useSelector } from "react-redux";
import postRepliesReducer, { postReplySelectors } from "../ducks/postReplies";
import { map } from "lodash/fp";
import { formatDistance } from "date-fns";

export function PostReplies({ post }) {
  const postReplies = useSelector(postReplySelectors.replies(post.id));

  useCyclicRefresh(1000);

  return (
    <div className="replies">
      {map(
        reply => (
          <div key={reply.id} className="reply">
            {reply.content}
            <div className="posted-by-authorship">
              Posted by <strong>Anonymous</strong>{" "}
              {formatDistance(reply.postedAt, new Date())} ago
            </div>
          </div>
        ),
        postReplies
      )}
    </div>
  );
  return <pre>{JSON.stringify(postReplies, null, 2)}</pre>;
}
