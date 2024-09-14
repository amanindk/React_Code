import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <p>Please Login</p>;
  return (
    <div>
      <h5>Welcome:{user.username}</h5>
      <p>Password:{user.password}</p>
    </div>
  );
}

export default Profile;
