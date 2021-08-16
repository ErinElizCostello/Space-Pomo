import React from 'react';
import './styles/popUp.css'



const NASAInfoPopUp = ({ imageInfo }) => {

  const title = imageInfo.title
  const author = imageInfo.author
  const date = imageInfo.date
  const explanation = imageInfo.explanation

  const NASAImageInformation = [title, author, date, explanation]

  return (
    <div className="display">
      <div className="popUp">
        <div>
          {NASAImageInformation.map(imageInfo =>
            <div className="popUpSpacing">
              {imageInfo}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NASAInfoPopUp;