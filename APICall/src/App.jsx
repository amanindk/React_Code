import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/comments";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }, []);

  //POST Fetch API
  const postEvent = () => {
    const data = {
      name: "AMAN",
      position: "Web Developer",
      company: "Google",
      salary: "2cr",
    };
    const url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        console.log("response", response);
        if (response == 200) {
          alert("Successfully");
        }
      })
      .catch((e) => {
        console.log("e", e);
      });
  };

  // PUT Fetch API
  const postputEvent = () => {
    const data = {
      id: "qwrt1234",
      name: "AMAN",
      position: "Web Developer",
      company: "Google",
      salary: "2cr",
    };
    const url = data.id
      ? "https://jsonplaceholder.typicode.com/comments" + data.id
      : "https://jsonplaceholder.typicode.com/comments";
    fetch(url, {
      method: data.id ? "POST" : "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log("respose", response);
        if (response == 200) {
          alert("Succeessful");
        }
      })
      .catch((e) => {
        console.log("e", e);
      });
  };

  return (
    <div>
      <h2>This is my Fetch API</h2>
      <div>
        {data.map((items) => {
          return <div>{items.name}</div>;
        })}
      </div>
      <button onClick={postEvent}></button>
      <button onClick={postputEvent}></button>
    </div>
  );
}

export default App;
