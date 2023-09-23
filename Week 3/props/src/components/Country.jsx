import City from "./City";

function Country(props) {
  return (
    <div style={{backgroundColor: 'brown', padding: '8px 12px', margin: 8, color: 'white' }}>
      {/* eslint-disable-next-line react/prop-types */}
      <h1>{props.countryValue}</h1>

      {/* eslint-disable-next-line react/prop-types */}
      <City cityValue={props.cityValue} />
    </div>
  );
}

export default Country;

// background-color
// backgroundColor