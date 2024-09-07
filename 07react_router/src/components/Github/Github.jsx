import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

function Github() {
  // const data = useLoaderData();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center bg-gray-500 p-3 text-white text-3xl">
      <h1>Github Followers: {data.followers}</h1>
      <img
        src="https://avatars.githubusercontent.com/u/147711117?v=4"
        alt="Git_Picture"
        width={200}
      />
    </div>
  );
}

export default Github;

// export const githubInfoLoader = async () => {
//   const response = await fetch("https://api.github.com/users/hiteshchoudhary");
//   return response.json();
// };
