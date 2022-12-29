import init from "../init";

const Display = ({
  display,
  setDisplay,
  setBreakCounter,
  setSessionCounter,
}) => {
  const reset = () => {
    setBreakCounter(init.break);
    setSessionCounter(init.sesssion);
    setDisplay(init.display);
  };

  return (
    <>
      <div id="timer-label" className="title-display center">
        {display.status}
      </div>
      <div id="time-left" className="title-display timer center">
        {display.minutes}:
        {display.seconds < 10 ? `0${display.seconds}` : display.seconds}
      </div>
      <div className="center">
        <button
          id="start_stop"
          className="display-buttons"
          onClick={() => setDisplay({ ...display, action: "play" })}
        >
          Play
        </button>
        <button
          className="display-buttons"
          onClick={() => setDisplay({ ...display, action: "pause" })}
        >
          Pause
        </button>
        <button id="reset" className="display-buttons" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Display;
