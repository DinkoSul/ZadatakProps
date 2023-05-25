import "./App.css";
import StateFullfunkcija from "./statekomp/StateFullfunkcija";
// import StatefullComponent from "./statekomp/StatefullComponent";
// import UserChildren from "./kompomenteProps/UserChildren";
// import UserClass from "./kompomenteProps/UserClass";
// import UserFunction from "./kompomenteProps/UserFunction";
// import StatePrimjerKlass from "./statekomp/StatePrimjerKlass";

function App() {
  // const users = [
  //   { name: "Ivan", years: 30 },
  //   { name: "Ana", years: 25 },
  // ];

  return (
    <div className="App">
      <h1>State primjeri</h1>
      <StateFullfunkcija />
      {/* <StatefullComponent /> */}
      {/* <StatePrimjerKlass /> */}

      {/* <h1>React aplikacija</h1>
      <h3>Function</h3>
      <UserFunction name={users[0].name} years={users[0].years} />
      <h3>Class</h3>
      <UserClass name={users[1].name} years={users[1].years} />
      <h3>Children</h3>
      <UserChildren name={users[1].name} years={users[1].years}>
        A hobi mi je plivanje.
      </UserChildren> */}
    </div>
  );
}

export default App;
