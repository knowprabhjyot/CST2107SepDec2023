import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import TravelCard from "../../src/components/TravelCard/TravelCard";
import { Grid } from "@mui/material";

const URL = "https://restcountries.com/v3.1/all";

const HomePage = (props) => {
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
    } catch (error) {
      console.error("There was an error", error.message);
    }
  };

  useEffect(() => {
    flagsAPIWithAxios();
  }, []);

  return (
    <Grid container spacing={4}>
      {
        flagsData.map((data, index) => {
          return (
            <Grid key={index} item xs={12} md={4} lg={4}>
              <TravelCard data={data} />
            </Grid>
          );
        })
      }
    </Grid>
  );
};

HomePage.propTypes = {};

export default HomePage;
