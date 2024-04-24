import { count } from "console";
import React,{Component} from "react";
type CounterState={
    counter:number;
};
export default class CounterClass extends Component<any,CounterState>{
    state={counter:1};
    clickHandler=()=>{
        this.setState((prevState)=>({counter:prevState.counter+1}));
        this.setState((prevState)=>({counter:prevState.counter+1}));
        this.setState((prevState)=>({counter:prevState.counter+1}));
        // this.setState({counter:this.state.counter+1});
        // this.setState({counter:this.state.counter+1});
        console.log("Counter : ",this.state.counter);
    }
    render() {
        return (
            <div>
                Counter : {this.state.counter}
                <button onClick={this.clickHandler}>+</button>
            </div>
        );
    }
}