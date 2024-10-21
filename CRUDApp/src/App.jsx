import { useEffect, useState } from "react";
import Employeedata from "./Employeedata";
function App() {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [id, setId] = useState(0);
  const [update, setUpdate] = useState(false);

  const handleSave = (e) => {
    let error = "";
    if (firstName === "") {
      error += "FirstName is Required ";
    }
    if (lastName === "") {
      error += "LastName is Required ";
    }
    if (age <= 0) {
      error += "Age is Required";
    }

    if (error === "") {
      e.preventDefault();
      const dt = [...data];
      const newObject = {
        id: Employeedata.length + 1,
        firstName: firstName,
        lastName: lastName,
        age: age,
      };
      dt.push(newObject);
      setData(dt);
    } else alert(error);
  };

  const handleUpdate = () => {
    const index = data
      .map((item) => {
        return item.id;
      })
      .indexOf(id);
    const dt = [...data];
    dt[index].firstName = firstName;
    dt[index].lastName = lastName;
    dt[index].age = age;
    setData(dt);
  };

  const handleClear = () => {
    setAge(0);
    setFirstName("");
    setLastName("");
    setUpdate(false);
  };

  const handleEdit = (id) => {
    const dt = data.filter((item) => item.id === id);
    if (dt !== undefined) {
      setId(dt[0].id);
      setFirstName(dt[0].firstName);
      setLastName(dt[0].lastName);
      setAge(dt[0].age);
    }
    setUpdate(true);
  };

  const handleDelete = (id) => {
    if (id > 0) {
      window.confirm("Are you sure");
      const dt = data.filter((item) => item.id !== id);
      setData(dt);
    }
  };

  useEffect(() => {
    setData(Employeedata);
  }, []);
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px" }}
      >
        <label htmlFor="">
          FirstName:{" "}
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter the FirstName"
          />
        </label>
        <label htmlFor="">
          LastName:{" "}
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Enter the LastName"
          />
        </label>
        <label htmlFor="">
          Age:{" "}
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter the Age"
          />
        </label>
        {!update ? (
          <button className="btn btn-primary" onClick={(e) => handleSave(e)}>
            Save
          </button>
        ) : (
          <button onClick={() => handleUpdate()} className="btn btn-primary">
            Update
          </button>
        )}
        <button onClick={() => handleClear()} className="btn btn-danger">
          Clear
        </button>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <td>Sr. no.</td>
            <td>ID</td>
            <td>FirstName</td>
            <td>LastName</td>
            <td>Age</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
