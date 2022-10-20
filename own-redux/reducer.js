export const rootReducer = function (state, action) {
  const { value: prevValue } = state;

  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: prevValue + 1 };
    case "DECREMENT":
      return { ...state, value: prevValue - 1 };
    case "THEME_CHANGE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
