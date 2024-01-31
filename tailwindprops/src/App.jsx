import { useState } from "react";
import "./App.css";
import Card from "./component/card";

function App() {
  const [count, setCount] = useState(0);
  let obj = {
    name: "aman",
    company: "deeptech",
  };
  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-300 text-black p-4 rounded-xl mb-4">
        Tailwind CSS
      </h1>
      {/* <Card username="deeptech" someobj={(obj, newArr)} /> */}
      <Card username="deeptech" btntext="visit the profile " />
      <Card username="Aman" btntext="click the button" />
    </>
  );
}

export default App;
