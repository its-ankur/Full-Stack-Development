import React from 'react';
type GreetProps = {
    value?: string;
};
class GreetClass extends React.Component<GreetProps> {
    ClickHandler = () => {
        console.log("Clicked on " + this.props.value);
    };
    render() {
        return (
        <div>
            Welcome to {this.props.value || "React"}
            <button onClick={this.ClickHandler}>Click Me</button>
        </div>
        );
    }
};
export default GreetClass;