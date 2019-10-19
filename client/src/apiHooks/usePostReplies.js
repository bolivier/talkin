import { getPostReplies } from "../api/posts";
import { useSelector, useDispatch } from "react-redux";
import { postReplySelectors, postReplyActions } from "../ducks/postReplies";

export function usePostReplies(postId) {
  const postReplies = useSelector(postReplySelectors.replies);
    const dispatch = useDispatch();

  const update = newPost => {
    dispatch(postReplyActions.addReply(newPost, postId));
  };

  return [postReplies, update];
}
