import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { decrement, increment, incrementByVal } from "../redux/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    // setCount(Count + 1); // react Hooks without redux
    // dispatch(incrementAction()); // react Hooks + new redux
    // incrementAction(dispatch); // react Hooks + redux thunk
    dispatch(increment()); // react Hooks + redux toolkit
  };

  const handleDecrease = () => {
    // setCount(Count - 1);
    // dispatch(decrementAction());
    // decrementAction(dispatch);
    dispatch(decrement());
  };
  const handleIncreaseByValue = (val) => {
    // setCount(Count - 1);
    // dispatch(inrementByValAction(val));
    // inrementByValAction(val, dispatch);
    dispatch(incrementByVal(val));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Redux-toolkit - Hooks - useSelector - useDispatch</h3>
      <p>{count}</p>
      <button onClick={handleDecrease}>decrease[1]</button>
      <button onClick={handleIncrease}> increase[1]</button>
      <button onClick={() => handleIncreaseByValue(3)}>incBy[3]</button>
    </div>
  );
}
export default Counter;
