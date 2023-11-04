import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    console.log("uppercase was clicked");
    SetText("you have clicked on handleupclick");
  };
  const handleonChange = (event) => {
    console.log("on Change");
    SetText(event.target.value);
  };

  const [Text, SetText] = useState("Enter text here2    ");
  // Text = "new text";  // wrong way the change thee state
  // setText("new Text"); // correct way the change thee state
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        {/* <label for="mybox" class="form-label">
          Example textarea
        </label> */}
        <textarea
          className="form-control"
          onChange={handleonChange}
          value={Text}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpclick}>
        Convert the Uppercase
      </button>
    </div>
  );
}
