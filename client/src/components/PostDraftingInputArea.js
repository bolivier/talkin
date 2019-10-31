import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { draftSelectors, draftActions } from '../ducks/draft';
import { postReplyActions } from '../ducks/postReplies';
import '../scss/app.scss';
import { createReply } from '../api/posts';

export function PostDraftingInputArea({ postId }) {
  const draft = useSelector(draftSelectors.draft);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(draftActions.updateDraft(e.target.value));
  };

  const onClick = () => {
    createReply(draft).then(reply => {
      console.log(reply);

      dispatch(postReplyActions.addReply(reply, postId));
    });
  };

  return (
    <div className="reply-area-container">
      <div>
        <div>
          <label htmlFor="draft">Post a reply:</label>
        </div>
        <textarea
          onChange={onChange}
          value={draft}
          id="draft"
          name="story"
          rows="5"
          cols="33"
        />
        <div className="post-button-row">
          <button className="btn" onClick={onClick}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
