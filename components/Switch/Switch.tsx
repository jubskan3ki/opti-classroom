import React from 'react';

const Switch = ({ label, onChange }) => {
  return (
    <div className="switch">
      <label>
        {label}
        <input type="checkbox" onChange={onChange} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Switch;
