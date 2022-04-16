import React, {useState, useEffect} from "react";
import './App.css'

const App = () => {
  const randInt = Math.floor(Math.random() * 100);

  const [countdown, setCountdown] = useState(10);
  const [number, setNumber] = useState(randInt);

  useEffect( () => {
    const intervalId = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        setNumber(randInt)
        setCountdown(10);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
      
  }, [countdown, randInt]);

  return (
    <>
    <span className="timer">Timer: {countdown}</span>
    <span className="number">{number}</span>
    </>
  );
}

export default App;
