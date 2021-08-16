import React, { useState, useEffect } from 'react';
import ClockFace from './clockFace';
import TimerButtons from './timerButtons';



const Timer = () => {

  const [startAndStop, setStartAndStop] = useState(false)
  const [timer, setTimer] = useState(1500)

  useEffect(() => {
    let seconds = null
    startAndStop ?
      seconds = setInterval(() => {
        timer !== 0 ?
          setTimer(timer => timer - 1)
          : clearInterval(seconds)
      }, 1000)
      : !startAndStop &&
      clearInterval(seconds)
    return () => clearInterval(seconds);
  }, [startAndStop, timer]);


  const startTheClock = () => {
    setStartAndStop(true)
  }

  const stopTheClock = () => {
    setStartAndStop(false)
  }

  const resetTimer = () => {
    setStartAndStop(false)
    setTimer(1500)
  }

  const increaseSeconds = () => {
    timer + 1 > 3599 ? setTimer(3599)
      : setTimer(timer => timer + 1)
  }

  const decreaseSeconds = () => {
    timer - 1 < 0 ? setTimer(0)
      : setTimer(timer => timer - 1)
  }

  const increaseMinutes = () => {
    timer + 60 > 3599 ? setTimer(3599)
      : setTimer(timer => timer + 60)
  }

  const decreaseMinutes = () => {
    timer - 60 < 0 ? setTimer(0)
      : setTimer(timer => timer - 60)
  }

  const buttonInfo = { startTheClock, stopTheClock, resetTimer, increaseMinutes, decreaseMinutes, increaseSeconds, decreaseSeconds
  }

  return (
    <div>
      <ClockFace timer={timer} />
      <TimerButtons buttonInfo={buttonInfo} />
    </div>
  );
}

export default Timer;