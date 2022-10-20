export default function createStore(reducer, initialState) {
  let state = initialState;

  const cbs = [];

  return {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);

      cbs.forEach((cb) => cb());
    },
    subscribe(callback) {
      cbs.push(callback);
    },
  };
}
