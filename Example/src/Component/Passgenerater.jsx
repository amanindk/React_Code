import { useCallback, useState, useEffect, useRef } from "react";

function Passgenerater() {
  const [length, setlength] = useState(8);
  const [numberallow, setnumberallow] = useState(false);
  const [charallow, setcharallow] = useState(false);
  const [password, setpassword] = useState("");

  //useRef hooks
  const passwordRef = useRef();
  const passwordGenerater = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRTUVWXYZbcdefghijklmnopqrstuvwxyz";
    if (numberallow) str += "1234567890";
    if (charallow) str += "!@#$%^&*()<>?{}|?+_-=";
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberallow, charallow, setpassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerater();
  }, [length, numberallow, charallow, passwordGenerater]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600 ">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              name=""
              id=""
              min={7}
              max={100}
              value={length}
              className="cursor-pointer "
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberallow}
              id="numberInput"
              onChange={() => {
                setnumberallow((prev) => !prev);
              }}
            />
            <label htmlFor="">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charallow}
              id="numberInput"
              onChange={() => {
                setcharallow((prev) => !prev);
              }}
            />
            <label htmlFor="">Characters </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Passgenerater;
