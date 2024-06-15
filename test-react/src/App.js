// App.js
import React, { useState, useEffect } from "react";
import Popup from "../src/Component/Popup";
import "./App.css"; // App specific styles

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true); // Jab component mount ho, popup show ho
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <Popup show={showPopup} onClose={handleClosePopup} />
    </div>
  );
};

export default App;
