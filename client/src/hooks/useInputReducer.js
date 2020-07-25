import { useReducer } from "react";

const useInputReducer = (initVal) => {
  const reducer = (state, action) => {
    return {
      ...state,
      [action.field]: action.value,
    };
  };

  const [state, dispatch] = useReducer(reducer, initVal);

  return [state, dispatch];
};

export default useInputReducer;
