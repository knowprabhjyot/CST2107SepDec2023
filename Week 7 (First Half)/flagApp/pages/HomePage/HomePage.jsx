import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

const URL = 'https://restcountries.com/v3.1/all';

const HomePage = props => {

 const [flagsData, setFlagsData] = useState([]);

//   const getFlagsApi = async () => {
//     try {
//         const flagsData = await fetch(URL);
//         const flagDataWithJson = await flagsData.json();
//     } catch (error) {
//         console.error('There was an error', error.message);
//     }
//   }

  const flagsAPIWithAxios = async () => {
    try {
        const { data } = await axios.get(URL);
        setFlagsData(data);
    } catch(error) {
        console.error('There was an error', error.message);
    }
  }

  useEffect(() => {
    flagsAPIWithAxios();
  }, []);

  return (
    <div>
        {
            // TODO: CHANGE IT TO RIGHT COMPONENTS
            flagsData.map((data, index) => {
                return <h1 key={index}>{data.name.common}</h1>
            })
        }
    </div>
  )
}

HomePage.propTypes = {}

export default HomePage