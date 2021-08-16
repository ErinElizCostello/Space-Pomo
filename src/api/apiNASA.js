const KEY = process.env.NASA_KEY;

export const getNASAPhotos = () => {
  return fetch(`https://api.nasa.gov/planetary/apod?api_key=${KEY}&count=1`)
}