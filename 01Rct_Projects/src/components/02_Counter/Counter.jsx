import { useState } from "react";
import "./counter.css";

function Counter() {
  const [counter, setCounter] = useState(10);
  const addcounter = () => {
    // counter = counter + 1;
    // setCounter(counter + 1);
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
  };
  const removecounter = () => {
    // setCounter(counter - 1);
    setCounter((prevcounter) => prevcounter - 1);
    setCounter((prevcounter) => prevcounter - 1);
    setCounter((prevcounter) => prevcounter - 1);
  };
  return (
    <div className="counter">
      <h2 className="text-center text-2xl text-blue-500 p-3">
        This is my First Counter Project using UseState
      </h2>
      <div className="flex flex-wrap p-3 justify-center">
        <button
          className="text-white bg-gray-500 p-3 mx-4"
          onClick={addcounter}
        >
          Add Counter :
        </button>{" "}
        <h3 className="text-3xl">{counter} </h3>
      </div>
      <div className="flex flex-wrap p-3 justify-center">
        <button className="text-white bg-gray-500 p-3" onClick={removecounter}>
          {" "}
          Remove Counter :
        </button>
        <h3 className="text-3xl">{counter}</h3>
      </div>
    </div>
  );
}

export default Counter;
