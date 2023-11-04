import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import { formatTime } from "../util";
import PropTypes from 'prop-types';
import { useContext } from 'react';
import PhotoContext from '../context/PhotoContext';

export const PhotoCard = ({ photoItem }) => {
  // Context provides us a hook to access data from context
  //  const data = useContext(PhotoContext);
  const { photoList, setPhotoList } = useContext(PhotoContext);

  const deletePhotoItem = () => {
    const newPhotoList = photoList.filter((data) => {
        if (data.id !== photoItem.id) {
            return data;
        }
    })

    setPhotoList(newPhotoList);
  }

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={photoItem.urls.regular}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{photoItem.slug}</div>
          <p className="text-gray-700 text-base">
           {photoItem.description || 'No Description found'}
          </p>
        </div>
        <div className="grid grid-cols-3 justify-center items-center px-6 pt-4 pb-2">
          <span className="flex bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <HandThumbUpIcon width={16} />  {photoItem.likes}
          </span>
          <span className="flex bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {formatTime(photoItem.created_at)}
          </span>
          <span className="flex bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <img src={photoItem.user.profile_image.small} alt="" />
            {photoItem.user.name}
          </span>
        </div>

        <button onClick={deletePhotoItem}>Delete</button>
      </div>
    </>
  );
  
};

PhotoCard.propTypes = {
    photoItem: PropTypes.any
}