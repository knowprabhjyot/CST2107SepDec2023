import { useEffect, useState } from 'react';
import './App.css'
import PhotoContext from './context/PhotoContext'
import { PhotoList } from './components/PhotoList';

const ACCESS_KEY='Fvu46T0XnTU6W3eqQ-dSoa-_eBioWVu4y4csJbtEps8';
const URL = `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`;
function App() {

  const [photoList, setPhotoList] = useState([]);

  // Call the Unsplash api, get the list of photos
  // save it inside the global context

  const getUnsplashData = async () => {
    const response = await fetch(URL);
    const finalData = await response.json();
    setPhotoList(finalData);
  }

  useEffect(() => {
    getUnsplashData();
  }, [])

  return (
    <PhotoContext.Provider value={{
      photoList,
      setPhotoList
    }}>
      <PhotoList />
    </PhotoContext.Provider>
  )
}

export default App
