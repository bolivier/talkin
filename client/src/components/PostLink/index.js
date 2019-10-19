import React from 'react';
import { Link} from "react-router-dom";
import { PostTitle } from './PostTitle';
import { PostContentSummary } from './PostContentSummary';
import './postLink.scss';

export function PostLink({ post }) {
    if (!post) {
        return null;
    }
    return (
        <Link to={`/posts/${post.id}`} >
            <div className="post-link-container">
            <PostTitle post={post}/>
            <PostContentSummary post={post}/>
            </div>
        </Link>
    );
}
