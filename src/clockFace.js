import React from 'react';
import { formatTime } from './formatTime';
import './styles/clockFace.css'



const ClockFace = ({ timer }) => {

  const formattedTime = formatTime(timer)

  return (
    <div className="clockface">
      {formattedTime}
    </div>
  );
}

export default ClockFace;