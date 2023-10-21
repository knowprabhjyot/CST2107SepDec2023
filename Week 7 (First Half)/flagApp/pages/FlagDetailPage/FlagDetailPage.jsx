import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import TravelCard from "../../src/components/TravelCard/TravelCard";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Box, Typography } from "@mui/material";

const URL = "https://restcountries.com/v3.1/name/";

const FlagDetailPage = (props) => {
  const { country } = useParams();
  const [countryData, setCountryData] = useState([]);

  const cssConfig = {
    width: "100%",
    height: "100%",
    imageWidth: "800px",
    imageHeight: "400px",
  };

  useEffect(() => {
    getCountryDataByName();
  }, []);

  const getCountryDataByName = async () => {
    const { data } = await axios.get(`${URL}/${country}`);
    setCountryData(data);
  };

  return (
    <div>
      <Link to={'/home'}>
        <Box display="flex" alignItems="center" marginBottom={20}>
          <KeyboardBackspaceIcon />
          <Typography variant="body2">Go Back!</Typography>
        </Box>
      </Link>
      {countryData.map((country, index) => {
        return (
          <TravelCard
            cssConfig={cssConfig}
            showViewMore={false}
            key={index}
            data={country}
          />
        );
      })}
    </div>
  );
};

FlagDetailPage.propTypes = {};

export default FlagDetailPage;
