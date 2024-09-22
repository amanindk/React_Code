import React, { useEffect, useState } from "react";

function App() {
  const url = "https://jsonplaceholder.typicode.com/comments";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(() => {
        console.log("json", json);
        setData(json);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }, []);
  return (
    <div>
      <h3>hello aman, this is my fetch api</h3>
      {data.map((item) => {
        return (
          <div>
            {item.id} <br />
            {item.name}
          </div>
        );
      })}
    </div>
  );
}

export default App;
