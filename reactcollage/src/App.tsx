import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Greet";
import GreetClass from "./GreetClass";

const ClickHandler1 = () => {
  console.log("Click handler 1");
};
const ClickHandler2 = () => {
  console.log("Click handler 2");
}
function App() {
  return (
    <div>
      {/* <Greet myClick={ClickHandler1} value="Code" data={10} />
      <Greet myClick={ClickHandler2} value="React" data={20} />
      <Greet value="TypeScript" data={30} /> */}
      <GreetClass value="Class"/>
    </div>
  );
}

export default App;
