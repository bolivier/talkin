import { set } from "lodash/fp";

const initialState = {
  1: [
    {
      id: 0,
      content: `Hey, this comment fuckin sucks, man!`,
      postedAt: new Date()
    },
    { id: 1, content: `^ this`, postedAt: new Date() }
  ]
};

export default function postRepliesReducer(
  state = initialState,
  { type, payload }
) {
  if (type === "ADD_REPLY") {
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
  } else {
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
