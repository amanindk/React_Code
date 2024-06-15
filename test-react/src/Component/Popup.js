// Popup.js
import React from 'react';
import './Popup.css'; // Style file

const Popup = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button onClick={onClose} className="close-button">X</button>
        <h2>Popup Content</h2>
        <p>This is the content inside the popup.</p>
      </div>
    </div>
  );
};

export default Popup;
