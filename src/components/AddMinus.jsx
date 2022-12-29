import Button from "./Button";

const AddMinus = ({
  title,
  counter,
  setCounter,
  display,
  setDisplay,
  status,
}) => {
  const incrementCounter = () => {
    if (counter < 60) {
      const minutes = counter + 1;
      if (display.status === status)
        setDisplay({ ...display, minutes, seconds: 0 });
      setCounter(minutes);
    }
  };

  const decrementCounter = () => {
    if (counter > 1) {
      const minutes = counter - 1;
      if (display.status === status)
        setDisplay({ ...display, minutes, seconds: 0 });
      setCounter(minutes);
    }
  };

  const disabled = () => display.action !== "pause";

  return (
    <>
      <div id={`${status}-label`}>{title}</div>
      <div className="length center">
        <Button
          onClick={incrementCounter}
          disabled={disabled()}
          symbol={"+"}
          status={status}
        />
        <div id={`${status}-length`}>{counter}</div>
        <Button onClick={decrementCounter} disabled={disabled()} symbol={"-"} />
      </div>
    </>
  );
};

export default AddMinus;
