const initialState = {
    toggle: false
};

const reducer = (state = initialState, action) => {
    if (action.type === "Toggle") {
        return {
            ...state,
            toggle: !state.toggle
        };
    }
    return state;
};

export default reducer;
