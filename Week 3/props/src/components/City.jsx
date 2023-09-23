import PropTypes from "prop-types";

const City = ({ cityValue, imageUrl }) => {
  return (
    <div>
      <img width={400} src={imageUrl} alt="" />
      <h3>{cityValue}</h3>
    </div>
  );
};

City.propTypes = {
  countryValue: PropTypes.string,
  cityValue: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default City;
