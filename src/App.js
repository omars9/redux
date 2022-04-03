import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc } from "./redux/actions";

function App() {
  const { counter, isShown } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button>hide/show</button>
      {isShown && (
            <div>
              <h2> {counter} </h2>
              <button onClick={() => dispatch(inc())}>+</button>
              <button onClick={() => dispatch(dec())}>-</button>
            </div>
      )}
    </div>
  );
}

export default App;
