import React, { useEffect, useState } from "react";

function App() {
  //Get Fetech API
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

  //Post Fetch API
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
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log("response", response);
        if (response == 200) {
          alert("Successfull");
        }
      })
      .catch((e) => {
        console.log("e", e);
      });
  };
  //Post PUT API
  const postputEvent = () => {
    const data = {
      id: "qwerty1234",
      name: "AMAN",
      position: "Web Developer",
      company: "Google",
      salary: "2cr",
    };

    const url = data.id
      ? "https://jsonplaceholder.typicode.com/comments" + data.id
      : "https://jsonplaceholder.typicode.com/comments";
    fetch(url, {
      method: data.id ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log("response", response);
        if (response == 200) {
          alert("Successfull");
        }
      })
      .catch((e) => {
        console.log("e", e);
      });
  };

  return (
    <div>
      <h2>this is my Get Fetch Api</h2>
      {data.map((items) => {
        return <div>{items.name}</div>;
      })}
      <button onClick={postEvent}></button>
      <button onClick={postputEvent}></button>
    </div>
  );
}

export default App;
