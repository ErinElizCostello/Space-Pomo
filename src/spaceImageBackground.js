import React, { useEffect, useState } from 'react';
import Timer from './timer';
import NASAImageAndPopUpButtons from './NASAImageAndPopUpButtons';
import NASAInfoPopUp from './NASAInfoPopUp';
import { getNASAPhotos } from './api/apiNASA'



const SpaceImageBackground = () => {

  const [imageNASA, setImageNASA] = useState(null)
  const [showPopUp, setShowPopUp] = useState(false)
  const [infoNASA, setInfoNASA] = useState({
    title: '',
    author: '',
    date: '',
    explanation: ''
  })
  
  const togglePopUp = () => setShowPopUp(!showPopUp)

  useEffect(() => {
    getNASAPhotos()
      .then(response => response.json())
      .then(data => {
        setImageNASA(data[0].hdurl)
        setInfoNASA({
          title: data[0].title,
          author: data[0].copyright,
          date: data[0].date,
          explanation: data[0].explanation
        })
      })
  }, []);

  const getNewNASAImage = () => {
    getNASAPhotos()
      .then(response => response.json())
      .then(data => {
        setImageNASA(data[0].hdurl)
        setInfoNASA({
          title: data[0].title,
          author: data[0].copyright,
          date: data[0].date,
          explanation: data[0].explanation
        })
      })
  }

  const NASAInformation = { image: getNewNASAImage, info: togglePopUp }

  return (
    <div
      style={{
        backgroundImage: `url(${imageNASA})`,
        height: '100vh',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Timer />
      <NASAImageAndPopUpButtons NASAInformation={NASAInformation} />
      {showPopUp && <NASAInfoPopUp imageInfo={infoNASA} />}
    </div>
  );
}

export default SpaceImageBackground;