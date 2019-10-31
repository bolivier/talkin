import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import './ForumList.scss';
import { PostLink } from './PostLink';
import { useSelector } from 'react-redux';
import { postSelectors } from '../ducks/posts';
import { usePosts } from '../apiHooks/usePosts';

export function ForumList() {
  usePosts();
  const posts = useSelector(postSelectors.posts);

  return (
    <React.Fragment>
      <Link to="/posts/new">
        <button className="btn">New Post</button>
      </Link>
      <div className="forum-list">
        {_.map(posts, post => (
          <PostLink post={post} />
        ))}
      </div>
    </React.Fragment>
  );
}
