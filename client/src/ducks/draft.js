const initialState = {
  content: ""
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case "SET_DRAFT":
      return {
        ...state,
        content: payload
      };
    case "ADD_REPLY":
      return {
        ...state,
        content: ""
      };
    default:
      return state;
  }
}

export const draftSelectors = {
  draft: state => state.draft.content
};

export const draftActions = {
  updateDraft: newDraft => ({
    type: "SET_DRAFT",
    payload: newDraft
  })
};
