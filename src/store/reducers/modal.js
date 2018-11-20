const initialState = {
  toggle: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  if (action.type === "Toggle") {
    return {
      ...state,
      toggle: !state.toggle,
      error: ""
    };
  } else if (action.type === "error") {
    return {
      ...state,
      error: action.msg
    };
  }
  return state;
};

export default reducer;
