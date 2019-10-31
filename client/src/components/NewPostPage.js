import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createNewPost } from '../api/posts';
import { postActions } from '../ducks/posts';

export function NewPostPage() {
  const [text, setText] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [newPostId, setNewPostId] = useState(null);
  const dispatch = useDispatch();
  const onClickPost = () => {
    createNewPost(text).then(post => {
      dispatch(postActions.addPost(post));
      setNewPostId(post.id);
      setShouldRedirect(true);
    });
  };
  const onChangeText = e => {
    setText(e.target.value);
  };
  return (
    <div className="new-post-page-container">
      <h2>Create a new post</h2>
      <div>
        <textarea
          value={text}
          onChange={onChangeText}
          className="post-area"
          placeholder="Post Area"
        ></textarea>
      </div>
      <div>
        <button className="btn" onClick={onClickPost}>
          Post
        </button>
      </div>
      {shouldRedirect && <Redirect to={`/posts/${newPostId}`} />}
    </div>
  );
}
