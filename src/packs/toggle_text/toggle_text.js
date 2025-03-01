/**
 * Код сгенерирован HalvaBot
*/
import React, { useState } from 'react';
import './toggle_button.css';

const ToggleText = ({ buttonText, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility} className="toggle-button">
        {buttonText}
      </button>
      <div style={{ display: isVisible ? 'block' : 'none' }}>
        {children}
      </div>
    </div>
  );
};

export default ToggleText;