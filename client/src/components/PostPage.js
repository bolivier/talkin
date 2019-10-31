import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { postSelectors } from '../ducks/posts';
import { Post } from './Post';
import { PostReplies } from './PostReplies';
import { PostDraftingInputArea } from './PostDraftingInputArea';
import { usePostReplies } from '../apiHooks/usePostReplies';
import { usePostReplyData } from '../apiHooks/usePostReplyData';
import { usePosts } from '../apiHooks/usePosts';
import { PostNotFoundPage } from './PostNotFoundPage';

export function PostPage() {
  const {
    params: { postId },
  } = useRouteMatch();
  const post = useSelector(postSelectors.post(postId));

  usePostReplyData(postId);
  const [postReplies, addPostReply] = usePostReplies(postId);

  if (!post) {
    return <PostNotFoundPage />;
  }

  return (
    <div className="post-page-container">
      <Post post={post} />
      <PostReplies post={post} />
      <PostDraftingInputArea postId={postId} />
    </div>
  );
}
