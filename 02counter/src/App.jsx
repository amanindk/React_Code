import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(12);
  // let counter = 12;
  const addvalue = () => {
    // counter = counter + 1;
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    console.log("clicked", counter);
  };
  const removevalue = () => {
    // console.log("clicked", counter);
    // counter = counter - 1;
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>hello babutech</h1>
      <h2>counter value:{counter}</h2>

      <button onClick={addvalue}>Add Value {counter}</button>
      <br />
      <button onClick={removevalue}>Remove Value {counter}</button>
    </>
  );
}

export default App;
