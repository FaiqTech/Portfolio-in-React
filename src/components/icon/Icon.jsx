import React from "react";

function Icon({ iconName }) {
  return (
    <div className="icon">
      <img src={`../../assets/icons/${iconName}.svg`} alt={iconName} />
    </div>
  );
}

export default Icon;
