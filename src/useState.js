import React from 'react'
import {useState} from 'react';

function UseState() {

    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter+1)
    }

  return (
    <div>
      {counter}
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default UseState;