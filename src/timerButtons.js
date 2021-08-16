import React from 'react';
import './styles/timerButtons.css'



const TimerButtons = ({ buttonInfo }) => {

  const startTheClock = buttonInfo.startTheClock
  const stopTheClock = buttonInfo.stopTheClock
  const resetTimer = buttonInfo.resetTimer
  const increaseSeconds = buttonInfo.increaseSeconds
  const decreaseSeconds = buttonInfo.decreaseSeconds
  const increaseMinutes = buttonInfo.increaseMinutes
  const decreaseMinutes = buttonInfo.decreaseMinutes

  return (
    <div className="display">
      <div className="stopStartResetDisplay">
        <button className="timerBtns" onClick={startTheClock}>
          start
        </button>
        <button className="timerBtns" onClick={stopTheClock}>
          stop
        </button>
        <button className="timerBtns" onClick={resetTimer}>
          reset
        </button>
      </div>
      <div className="increaseDecreaseDisplay">
        <div className="minutes">
          <button className="timerBtns" onClick={increaseMinutes}>
            + min
          </button>
          <button className="timerBtns" onClick={decreaseMinutes}>
            - min
          </button>
        </div>
        <div className="spacer"></div>
        <div className="seconds">
          <button className="timerBtns" onClick={increaseSeconds}>
            + sec
          </button>
          <button className="timerBtns" onClick={decreaseSeconds}>
            - sec
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimerButtons;