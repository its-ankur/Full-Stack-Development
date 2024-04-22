import React from "react";
type GreetProps = {
  value?: string;
  data?: number;
  myClick?: () => void;
};

const Greet = (props: GreetProps) => {
  const ClickHandler = () => {
    console.log("Clicked on " + props.value);
  };
  return (
    <div>
      Welcome to {props.value || "React"} {props.data || 0}
      <p>
        <button onClick={props.myClick || ClickHandler}>Click Me</button>
      </p>
    </div>
  );
};

export default Greet;
