import { useState } from "react";
import "./style.css";
const ListGroup = () => {
  const items = ["First", "Second", "Third", "Fourth"];
  //let selectedIndex = -1;
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleClick = (index: number) => {
    setSelectedIndex(index);
    console.log("Selected Index: " + selectedIndex);
  };
  return (
    <div>
      <ul className="list-group">
        {/* <li>First</li>
                <li>Second</li>
                <li>Third</li>
                <li>Fourth</li> */}
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "active" : ""}
            onClick={() => {
              handleClick(index);
            }}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListGroup;
