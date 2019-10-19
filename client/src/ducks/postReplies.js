import { set } from "lodash/fp";

const initialState = {};

export default function postRepliesReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
      case "SET_REPLIES":
          return payload;
    case "ADD_REPLY":
      return {
        ...state,
        [payload.postId]: [
          ...state[payload.postId],
          {
            id: Math.floor(Math.random() * 1000),
            content: payload.content,
            postedAt: new Date()
          }
        ]
      };

    default:
      return state;
  }
}

export const postReplySelectors = {
  replies: id => state => state.postReplies[id]
};

export const postReplyActions = {
  addReply: (content, postId) => ({
    type: "ADD_REPLY",
    payload: { content, postId }
  })
};
