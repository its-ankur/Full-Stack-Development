import exp from "constants";
import React,{Component} from "react";
type TimerProps={
    initial:number;
}
export default class CTimer extends Component<TimerProps>{
    state={data:this.props.initial};
    constructor(props:TimerProps){
        super(props);
        setInterval(()=>{
            this.setState({data:this.state.data+1});
        },1000);
    }
    render() {
        return (
            <div>
                Counter : {this.state.data}
            </div>
        )
    }
}