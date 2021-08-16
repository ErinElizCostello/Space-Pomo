import React from 'react';
import './styles/NASAButtons.css'



const NASAImageAndPopUpButtons = ({ NASAInformation }) => {

  const getNewNASAImage = NASAInformation.image
  const togglePopUp = NASAInformation.info

  return (
    <div className="display">
      <div className="NASABtnsDisplay">
        <button className="NASAImageBtns" onClick={getNewNASAImage}>
          new NASA image
        </button>
        <button className="NASAImageBtns" onClick={togglePopUp}>
          ?
        </button>
      </div>
    </div>
  );
}

export default NASAImageAndPopUpButtons;