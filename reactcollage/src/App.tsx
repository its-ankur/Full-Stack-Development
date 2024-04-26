import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Greet";
import GreetClass from "./GreetClass";
import Counter from "./Counter";
import CounterClass from "./CounterClass";
import CTimer from "./CTimer";
import ListGroup from "./ListGroup";
import UI from "./UI";

// const ClickHandler1 = () => {
//   console.log("Click handler 1");
// };
// const ClickHandler2 = () => {
//   console.log("Click handler 2");
// }
// function App() {
//   return (
//     <div>
//       {/* <CTimer initial={50}/> */}
//       {/* <Greet myClick={ClickHandler1} value="Code" data={10} />
//       <Greet myClick={ClickHandler2} value="React" data={20} />
//       <Greet value="TypeScript" data={30} /> */}
//       {/* <GreetClass value="Class"/> */}
//       {/* <Counter/> */}
//       <CounterClass/>
//     </div>
//   );
// }

const App = () => {
  return (
    // <ListGroup/>
    <UI/>
  )
}


export default App;
