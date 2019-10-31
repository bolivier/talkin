const initialState = {};

export default function postsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'SET_POSTS':
      return payload;
    case 'ADD_POST':
      return {
        ...state,
        [payload.id]: payload,
      };
    default:
      return state;
  }
}

export const postSelectors = {
  post: id => state => state.posts[id],
  posts: state => state.posts,
};

export const postActions = {
  setPosts: posts => ({
    type: 'SET_POSTS',
    payload: posts,
  }),
  addPost: post => ({
    type: 'ADD_POST',
    payload: post,
  }),
};
