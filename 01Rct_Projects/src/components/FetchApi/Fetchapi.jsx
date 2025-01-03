import React, { useEffect, useState } from "react";

function fetchapi() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responive) => responive.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Fetch error", error));
  }, []);
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>Name:{item.name}</p>
            <p>Username:{item.username}</p>
            <p>Email:{item.email}</p>
            <p>address-street:{item.address.street}</p>
            <p>address-Suite:{item.address.suite}</p>
            <p>geo-lat:{item.address.geo.lat}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default fetchapi;
