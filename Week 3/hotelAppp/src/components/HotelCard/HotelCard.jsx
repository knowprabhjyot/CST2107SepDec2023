import React from "react";
import PropTypes from "prop-types";
import "./HotelCard.css";

const HotelCard = ({ hotel }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={hotel.image} alt={hotel.title} />
      </div>
      <h1>Name: {hotel.title}</h1>
      <p>Price: ${hotel.price}</p>
     <div className="meta-container">
     <span>Likes: {hotel.like}</span>
      <span>Rating: {hotel.rating} stars</span>
     </div>
    </div>
  );
};

HotelCard.propTypes = {
  hotel: PropTypes.any,
};

export default HotelCard;
