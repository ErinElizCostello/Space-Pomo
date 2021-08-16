import React from 'react';
import './styles/NASAButtons.css'



const NASAImageAndPopUpButtons = ({ NASAInformation }) => {

  const getNewNASAImage = NASAInformation.image
  const togglePopUp = NASAInformation.info

  return (
    <div className="display">
      <button className="NASAImageBtns" onClick={getNewNASAImage}>
        new NASA image
      </button>
      <button className="NASAImageBtns" onClick={togglePopUp}>
        ?
      </button>
    </div>
  );
}

export default NASAImageAndPopUpButtons;