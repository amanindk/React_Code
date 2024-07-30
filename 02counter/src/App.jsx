import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(12);

  const addvalue = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
  };
  const removevalue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Counter Project using usestate</h1>
        <button onClick={addvalue}>Add value: {counter}</button>
        <br />
        <button onClick={removevalue}> Remove value : {counter}</button>
      </div>
    </>
  );
}

export default App;
