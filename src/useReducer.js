import React from "react";
import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "TOGGLE":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({
            type: "INCREMENT",
            payload: state,
          });
          dispatch({
              type: 'TOGGLE',
              payload: state
          })
        }}
      >
        Click here
      </button>

      {state.showText && <p>THis is a text</p>}
    </div>
  );
}

export default UseReducer;
