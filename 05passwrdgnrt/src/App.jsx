import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState("8");
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerater = useCallback(() => {
    let pass = "";
    let str = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSZXCVBNM";
    if (number) str += "1234567890";
    if (character) str += "!@#$%^&*()_+`~[]}{;:/?.>,<";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character, setPassword]);

  // useRef
  const passwordRef = useRef();

  const copyclipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerater();
  }, [length, number, character, passwordGenerater]);

  return (
    <div>
      <div className="bg-blue-100 p-3">
        <h1 className="text-3xl text-center text-blue-900">
          Password Generater
        </h1>
      </div>
      <div className="inp_cbtn">
        <div className="my-5">
          <input
            type="text"
            readOnly
            className="input"
            placeholder="password"
            value={password}
            ref={passwordRef}
          />
          <button onClick={copyclipboard} className="button">
            copy
          </button>
        </div>
        <div className="flex">
          <div className="px-2">
            <input
              type="range"
              min={1}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            {length}
          </div>
          <div className="px-2">
            <input
              type="checkbox"
              defaultChecked={number}
              onChange={() => setNumber((prev) => !prev)}
            />
            Number
          </div>
          <div className="px-2">
            <input
              type="checkbox"
              defaultChecked={character}
              onChange={() => setCharacter((prev) => !prev)}
            />
            Character
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
