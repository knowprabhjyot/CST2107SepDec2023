import React from 'react'
import PropTypes from 'prop-types'
import HotelCard from '../HotelCard/HotelCard'
import './HotelInfo.css';

const HotelInfo = ({ data }) => {
  return (
    <div className='hotel-container'>
        {
            data.map((hotel, index) => {
                return <HotelCard hotel={hotel} key={index} />
            })
        }
    </div>
  )
}

HotelInfo.propTypes = {
    data: PropTypes.any
}

export default HotelInfo