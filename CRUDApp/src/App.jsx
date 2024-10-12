import React, { useEffect, useState } from "react";
import Employeedata from "./Employeedata.jsx";

function App() {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [id, setId] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  const hanldeEdit = (id) => {
    const dt = data.filter((item) => item.id === id);
    if (dt !== undefined) {
      setIsUpdate(true);
      setId(id);
      setFirstName(dt[0].firstName);
      setLastName(dt[0].lastName);
      setAge(dt[0].age);
    }
  };

  const hanldeDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure deleted thid item")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };

  const hanldeSave = (e) => {
    let error = "";
    if (firstName === "") {
      error += "Firstname is Requird";
    }
    if (lastName === "") {
      error += "Lastname is required";
    }

    if (age <= 0) {
      error += "Age is required";
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
    } else {
      alert(error);
    }
  };

  const hanldeUpdate = () => {
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
    hanldeClear();
  };

  const hanldeClear = () => {
    setIsUpdate(false);
    setId(0);
    setFirstName("");
    setLastName("");
    setAge("");
  };

  useEffect(() => {
    setData(Employeedata);
  }, []);

  return (
    <div className="app">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter First Name"
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter Last Name"
            />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter First Name"
            />
          </label>
        </div>
        {!isUpdate ? (
          <button className="btn btn-primary" onClick={(e) => hanldeSave(e)}>
            Save
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => hanldeUpdate()}>
            Update
          </button>
        )}

        <button className="btn btn-danger" onClick={() => hanldeClear()}>
          Clear
        </button>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <td>Sr no. </td>
            <td>ID </td>
            <td>FirstName</td>
            <td>LstName</td>
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
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => hanldeEdit(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => hanldeDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
