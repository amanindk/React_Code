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
      <button onClick={() => click("blue")}>Blue</button>
      <button onClick={() => click("red")}>Red</button>
      <button onClick={() => click("Yellow")}>Yellow</button>
      <button onClick={() => click("pink")}>Pink</button>
      <button onClick={() => click("green")}>Green</button>
    </div>
  );
}

export default Backgroundchange;
