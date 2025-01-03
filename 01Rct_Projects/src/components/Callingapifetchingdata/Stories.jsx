import React, { useEffect } from "react";

function Stories() {
  let isLoading = true;
  let API = "https://jsonplaceholder.typicode.com/users";

  const fetchapiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchapiData(API);
  }, []);

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <div>
      <h1>Stories Data</h1>
      <ul>
        {data?.map((item) => (
          <li key={item}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Stories;
