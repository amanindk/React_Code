// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div>
      <h1 className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github Follower: {data.followers}{" "}
      </h1>
      {/* <img src={data.avatar_url} alt="Gihub Picture" width={300} /> */}
      <img
        src="https://avatars.githubusercontent.com/u/147711117?v=4"
        alt="Gihub Picture"
        width={300}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
