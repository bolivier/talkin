import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getPostReplies } from "../api/posts";

export function usePostReplyData(postId) {
    const dispatch = useDispatch();
    useEffect(() => {
        
        getPostReplies(postId).then(result => {
        dispatch({
            type: "SET_REPLIES",
            payload: result
        });
    });
  }, [postId]);
}
