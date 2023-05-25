import React from "react";

const UserFunction = ({ name, years, children }) => {
  return (
    <div>
      <p>
        Pozdrav, moje ime je {name} i imam {years} godina.
      </p>
      <p>{children}</p>
    </div>
  );
};

export default UserFunction;
