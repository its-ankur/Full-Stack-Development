import { ChangeEvent, useState } from "react";

const UI = () => {
  const [textData, setTextData] = useState<number>(0);
  const [secondTextData, setSecondTextData] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTextData(parseInt(e.target.value));
  };

  const changeHandler1 = (e: ChangeEvent<HTMLInputElement>) => {
    setSecondTextData(parseInt(e.target.value));
  };

  const clickHandler = () => {
    setResult(textData + secondTextData);
  };

  const changeHandler2 = (e: ChangeEvent<HTMLInputElement>) => {
    setResult(parseInt(e.target.value));
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter first number"
        onChange={changeHandler}
      />
      <input
        type="number"
        placeholder="Enter second number"
        onChange={changeHandler1}
      />
      <input type="number" value={result} onChange={changeHandler2} />
      <button onClick={clickHandler}>Print</button>
    </div>
  );
};

export default UI;
