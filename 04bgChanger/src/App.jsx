import { useState } from "react";
import "./App.css";

function App() {
  const [color, SetColor] = useState("olive");
  return (
    <div
      className="h-screen duration-200 w-full"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-3xl text-black bg-white rounded-xl px-3 py-2">
          <button
            onClick={() => SetColor("red")}
            className="px-4 outline-none px-2 py-2 text-white rounded-lg shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => SetColor("blue")}
            className="px-4 outline-none px-2 py-2 text-white rounded-lg shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => SetColor("orange")}
            className="px-4 outline-none px-2 py-2 text-white rounded-lg shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => SetColor("green")}
            className="px-4 outline-none px-2 py-2 text-white rounded-lg shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => SetColor("yellow")}
            className="px-4 outline-none px-2 py-2 text-black rounded-lg shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            onClick={() => SetColor("olive")}
            className="px-4 outline-none px-2 py-2 text-white rounded-lg shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => SetColor("gray")}
            className="px-4 outline-none px-2 py-2 text-white rounded-lg shadow-lg"
            style={{ backgroundColor: "gray" }}
          >
            gray
          </button>
          <button
            onClick={() => SetColor("black")}
            className="px-4 outline-none px-2 py-2 text-white rounded-lg shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
          <button
            onClick={() => SetColor("pink")}
            className="px-4 outline-none px-2 py-2 text-black rounded-lg shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            {" "}
            Pink
          </button>
          <button
            onClick={() => SetColor("lavender")}
            className="px-4 outline-none px-2 py-2 text-black rounded-lg shadow-lg"
            style={{ backgroundColor: "lavender" }}
          >
            {" "}
            Lavender
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
