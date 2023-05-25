import React from "react";

const StatelessComponent = ({ color, count, onButtonClick }) => {
  const style = { backgroundColor: color, padding: 20 };

  return (
    <div>
      <p>Broj klikova: {count}</p>
      <button style={style} onClick={onButtonClick}>
        Klikni me!
      </button>
    </div>
  );
};

export default StatelessComponent;
