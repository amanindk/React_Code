import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <>
      <div className="text-white bg-gray-500 text-center p-2 text-4xl">
        User :{userid}
      </div>
    </>
  );
}

export default User;
