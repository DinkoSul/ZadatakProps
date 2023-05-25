import React from "react";

const UserChildren = (props) => {
  return (
    <div>
      <p>
        Pozdrav, moje ime je {props.name} i imam {props.years} godina.
      </p>
      <p>{children}</p>
    </div>
  );
};

export default UserChildren;
