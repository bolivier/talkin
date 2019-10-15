import React from 'react';
import { truncate } from 'lodash';
import './postLink.scss';

export function PostContentSummary({ post }) {
  const content = truncate(post.content, { length: 50 });
  return <p className="post-link-content">{content}</p>;
}
