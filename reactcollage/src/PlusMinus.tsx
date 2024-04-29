import React,{Component} from "react";
type CounterState={
    counter:number;
};
export default class PlusMinus extends Component<any,CounterState>{
    state={counter:0};
    clickHandler=()=>{
        this.setState((prevState)=>({counter:prevState.counter+1}));
        console.log("Counter : ",this.state.counter);
    }
    clickHandler1=()=>{
        if(this.state.counter>0)
        this.setState((prevState)=>({counter:prevState.counter-1}));
        console.log("Counter : ",this.state.counter);
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler1}>-</button>
                Counter : {this.state.counter}
                <button onClick={this.clickHandler}>+</button>
            </div>
        );
    }
}