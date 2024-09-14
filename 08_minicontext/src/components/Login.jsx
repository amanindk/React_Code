import React, { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { setUser } = useContext(UserContext);

  const submithandle = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={submithandle}>SEND</button>
    </div>
  );
}

export default Login;
