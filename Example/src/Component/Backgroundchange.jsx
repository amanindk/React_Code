import { useEffect, useState } from "react";

function Backgroundchange() {
  const [color, setColor] = useState("black");
  const click = (color) => {
    setColor(color);
  };
  useEffect(() => {
    document.body.style.backgroundColor = color;
  });

  return (
    <div className="bgchange">
      <button
        className="p-2 bg-blue-500 border-2 border-rounded-1"
        onClick={() => click("blue")}
      >
        Blue
      </button>
      <button
        className="p-2 bg-red-500 border-2 border-rounded-1"
        onClick={() => click("red")}
      >
        Red
      </button>
      <button
        className="p-2 bg-yellow-500 border-2 border-rounded-1"
        onClick={() => click("Yellow")}
      >
        Yellow
      </button>
      <button
        className="p-2 bg-pink-500 border-2 border-rounded-1"
        onClick={() => click("pink")}
      >
        Pink
      </button>
      <button
        className="p-2 bg-green-500 border-2 border-rounded-1"
        onClick={() => click("green")}
      >
        Green
      </button>
    </div>
  );
}

export default Backgroundchange;
