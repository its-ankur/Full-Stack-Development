import React, { Component } from "react";
type State={
    counter:number
}
export default class NewPractice extends Component<any,State> {
  state = { counter: 0 };
  
  click1 = () => {
    if (this.state.counter > 0) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1
      }));
    }
  };
  
  click2 = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };
  
  render() {
    return (
      <>
        <button onClick={this.click1}>-</button>
        <div>{this.state.counter}</div>
        <button onClick={this.click2}>+</button>
      </>
    );
  }
}
