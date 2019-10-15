const initialState = {
  1: [
    { id: 0, content: `Hey, this comment fuckin sucks, man!` },
    { id: 1, content: `^ this` }
  ]
};

export default function postRepliesReducer(state = initialState, _action) {
  return state;
}

export const postReplySelectors = {
    replies: id => state => state.postReplies[id]
}
