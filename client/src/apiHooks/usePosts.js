import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPostSummaries } from "../api/posts";
import { postActions } from "../ducks/posts";

export function usePosts() {
  const dispatch = useDispatch();
  useEffect(() => {
    getPostSummaries().then(results => {
      dispatch(postActions.setPosts(results));
    });
  }, []);
}
