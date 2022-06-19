/* import { useEffect, useState } from "react";

const useCountdown = (timer) => {
  const [countdown, setCountdown] = useState(timer);
  const [number, setNumber] = useState(randInt);

  useEffect( () => {
    const intervalId = setInterval(() => {
      setCountdown(timer - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  return test();
}

const test = () => {

}

const randInt = Math.floor(Math.random() * 100);

const changeNumber = (timer) => {
  const [setCountdown, setNumber ] = useCountdown(10);
  if (timer === 0) {
    setCountdown(10);
    setNumber(randInt)
  }
}

/* import { useEffect, useState } from 'react';

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
}; */

/* export { useCountdown }; */
