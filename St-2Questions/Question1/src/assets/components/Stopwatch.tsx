import { Component } from "react";
import Lap from "./Lap";
type array={
    hour:number;
    minute:number;
    secound:number;
}
type state = {
  secound: number;
  stop: boolean;
  lapArray:array[];
  minute: number;
  hour: number;
    reset:boolean;
};
class Stopwatch extends Component<state> {
  state = {
    secound: 0,
    stop: false,
    lapArray: [],
    minute: 0,
    hour: 0,
    reset:false
  };
  start = () => {
    this.setState({ stop: false });
    const time = setInterval(() => {
      if (this.state.stop) {
        clearInterval(time);
      }
      this.setState({ secound: this.state.secound + 1 });
      if (this.state.secound === 60) {
        this.setState({ secound: 1 });
        this.setState({ minute: this.state.minute + 1 });
      }
      if (this.state.minute === 60) {
        this.setState({ minute: 1 });
        this.setState({ hour: this.state.hour + 1 });
      }
      if (this.state.hour === 24) {
        this.setState({ hour: 0 });
      }
    }, 1000);
  };
  stop = () => {
    this.setState({ stop: true });
  };
  lap = () => {
    this.setState({ lapArray: [...this.state.lapArray, {hour:this.state.hour,minute:this.state.minute,secound:this.state.secound}] });
    localStorage.setItem('lap',JSON.stringify(this.state.lapArray))
  };
  reset=()=>{
        this.setState({secound:0,minute:0,hour:0,lapArray:[]})
        localStorage.clear()
        this.setState({reset:true})
  }
  render() {
    return (
      <>
        <h1>Stopwatch</h1>
        <div>
          <span>{this.state.hour}</span> :<span> {this.state.minute}</span> :
          <span> {this.state.secound}</span>
        </div>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.lap}>Lap</button>
        <button onClick={this.reset}>Reset</button>
        <Lap lapArray={this.state.lapArray} reset={this.state.reset}/>
      </>
    );
  }
}
export default Stopwatch;
