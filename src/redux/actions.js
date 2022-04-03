import { DECREMENT, INCREMENT } from "./actionTypes";

// action creator

export const inc = () => {
  return {
    type: INCREMENT,
  };
};

export const dec = () => {
  return {
    type: DECREMENT,
  };
};
