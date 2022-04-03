import { DECREMENT, INCREMENT } from "./actionTypes";

const init = {
  counter: 0,
  isShown: true,
};

const reducer = (state = init, { type }) => {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default reducer;
