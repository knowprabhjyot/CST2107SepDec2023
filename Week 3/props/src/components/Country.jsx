import City from "./City";
import PropTypes from 'prop-types';

// import { ConvertToCapitals } from "../util";
import makeLastLetterCaps, { ConvertToCapitals } from '../util';

function Country(props) {
  return (
    <div style={{backgroundColor: 'brown', padding: '8px 12px', margin: 8, color: 'white' }}>
      <h1>{ConvertToCapitals(props.countryValue)}</h1>

      <City {...props} />
    </div>
  );
}

Country.propTypes = {
    countryValue: PropTypes.string,
    cityValue: PropTypes.string,
    imageUrl: PropTypes.string
}

export default Country;

// background-color
// backgroundColor