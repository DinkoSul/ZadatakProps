import React from "react";
import { useState } from "react";
import StatelessComponent from "./StatelessComponent";

const StateFullfunkcija = () => {
  const state = { color: "red", count: 0 };
  const [counter, setCounter] = useState(state.count);

  return (
    <div>
      <StatelessComponent
        count={counter}
        color={state.color}
        onButtonClick={() => setCounter(counter + 1)}
      />
    </div>
  );
};

export default StateFullfunkcija;
