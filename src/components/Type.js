import React from "react";
import './Type.styles.scss';

const Type = ({ children }) => {
  const type = children.toLowerCase();

  return (
    <div className="TypeContainer">
      <div className={`TypeSpace ${type}`}>
        {children}
      </div>
    </div>
  );
};

export default Type;
