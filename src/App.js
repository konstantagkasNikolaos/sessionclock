import "./App.css";
import React, { useEffect, useState } from "react";
import Audio from "./components/Audio";
import AddMinus from "./components/AddMinus";
import Display from "./components/Display";
import init from "./init";

function App() {
  const [breakCounter, setBreakCounter] = useState(init.break);
  const [sessionCounter, setSessionCounter] = useState(init.sesssion);
  const [display, setDisplay] = useState(init.display);

  useEffect(() => {
    const interval = setInterval(() => {
      if (display.action !== "pause") {
        if (display.seconds === 0) {
          if (display.minutes !== 0) {
            setDisplay({
              ...display,
              minutes: display.minutes - 1,
              seconds: 59,
            });
          } else {
            document.getElementById("beep").play();
            if (display.status === "session") {
              setDisplay({
                ...display,
                status: "break",
                minutes: breakCounter,
                seconds: 0,
              });
            } else {
              setDisplay({
                ...display,
                status: "session",
                minutes: sessionCounter,
                seconds: 0,
              });
            }
          }
        } else {
          setDisplay({ ...display, seconds: display.seconds - 1 });
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [display, breakCounter, sessionCounter]);

  return (
    <div className="container">
      <div className="title center">25 + 5 Clock</div>
      <div className="lengths center">
        <div className="break">
          <AddMinus
            title={"Break Length"}
            counter={breakCounter}
            setCounter={setBreakCounter}
            display={display}
            setDisplay={setDisplay}
            status={"break"}
          />
        </div>
        <div className="session">
          <AddMinus
            title={"Session Length"}
            counter={sessionCounter}
            setCounter={setSessionCounter}
            display={display}
            setDisplay={setDisplay}
            status={"session"}
          />
        </div>
      </div>
      <div className="display">
        <Display
          display={display}
          setDisplay={setDisplay}
          setBreakCounter={setBreakCounter}
          setSessionCounter={setSessionCounter}
        />
      </div>
      <Audio />
    </div>
  );
}

export default App;
