import React, { useContext } from 'react'
import PhotoContext from '../context/PhotoContext'
import { PhotoCard } from './PhotoCard';

export const PhotoList = () => {

// I can directly talk to my context
const { photoList } = useContext(PhotoContext);


return (
    <div className='grid grid-cols-3 gap-6'>
        {
            photoList.map((photoItem, index) => {
                return <PhotoCard photoItem={photoItem} key={index} />
            })
        }
    </div>
  )
}
