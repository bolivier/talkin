import { set } from 'lodash/fp';

const initialState = {};

export default function postRepliesReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case 'SET_REPLIES':
      return payload;
    case 'ADD_REPLY':
      return {
        ...state,
        [payload.postId]: (state[payload.postId] || []).concat(payload.reply),
      };

    default:
      return state;
  }
}

export const postReplySelectors = {
  replies: id => state => state.postReplies[id],
};

export const postReplyActions = {
  addReply: (reply, postId) => ({
    type: 'ADD_REPLY',
    payload: { reply, postId },
  }),
};
