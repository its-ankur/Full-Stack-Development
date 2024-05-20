import { Component } from "react";
type array = {
  hour: number;
  minute: number;
  secound: number;
};
type lap = {
  lapArray: array[];
  reset: boolean;
};
class Lap extends Component<any, lap> {
  state = {
    lapArray: [],
    reset: false,
  };
  componentDidMount() {
    const lap = localStorage.getItem("lap");
    if (lap) {
      this.setState({ lapArray: JSON.parse(lap) });
    }
  }
  componentDidUpdate() {
    if (this.props.reset) {
      
    }
  }
  render() {
    return (
      <>
        <h1>Lap</h1>
        <div>
          {this.props.lapArray.map((item: number, index: number) => {
            return (
              <div key={index}>
                <span>{item.hour}</span>:<span>{item.minute}</span>:
                <span>{item.secound}</span>
              </div>
            );
          })}
          {this.state.lapArray.map((item: array, index: number) => {
            return (
              <div key={index}>
                <span>{item.hour}</span>:<span>{item.minute}</span>:
                <span>{item.secound}</span>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default Lap;
