import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import TravelCard from "../../src/components/TravelCard/TravelCard";
import { Alert, Box, CircularProgress, Grid, LinearProgress, Snackbar } from "@mui/material";
import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";
import { auth, db } from "../../src/firebaseConfig";

const URL = "https://restcountries.com/v3.1/all";

const HomePage = (props) => {
  const [flagsData, setFlagsData] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [openNotification, setOpenNotification] = useState(false);
  const [notificationSeverity, setOpenNotificationSeverity] = useState("info");
  const travelFavoritesCollection = collection(db, "favoriteTravelSpots");
  const [myFavoriteList, setMyFavoriteList] = useState();

  const cssConfig = {
    height: "100%",
    width: "auto",
    imageHeight: 140,
    containerFlex: {
      display: 'block',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }
  };

  const flagsAPIWithAxios = async () => {
    try {
      const { data } = await axios.get(URL);
      getFavoritesList(data);
      // setFlagsData(data);
    } catch (error) {
      console.error("There was an error", error.message);
    }
  };

  useEffect(() => {
    flagsAPIWithAxios();
  }, []);

  // useEffect(() => {
  //   getFavoritesList();
  // }, [])
  
  const getFavoritesList = async (data) => {
    const favoritesResponse = await getDocs(travelFavoritesCollection);
    // response.docs.map((favoriteCountryName) => {
    //   return data.map((country) => {
    //     if (country.name.common === favoriteCountryName) {
    //       country.isFavorite = true;
    //     }
    //   })  
    // })

    const newData = data.map((country) => {
      favoritesResponse.docs.forEach((favorite) => {
        if (country.name.common === favorite.data().favoriteItem && auth.currentUser.uid === favorite.data().userId) {
          country.isFavorite = favorite.data().favoriteItem;
        }

      })
      
      return country;
    })

    // This will contain isFavorite property
    setFlagsData(newData);

    
  }

  //   const getFlagsApi = async () => {
  //     try {
  //         const flagsData = await fetch(URL);
  //         const flagDataWithJson = await flagsData.json();
  //     } catch (error) {
  //         console.error('There was an error', error.message);
  //     }
  //   }



  // Since we are waiting for the api data, we want to show spinner in meanwhile
  if (flagsData.length === 0) {
    return (
      <Box
        display="flex"
        // sx={{ width: "100vw" }}
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress size={40}  />
      </Box>
    );
  }

  const addToFavorites = async (favoriteItem) => {
    try {
      await addDoc(travelFavoritesCollection, {favoriteItem, userId: auth.currentUser.uid});
      setOpenNotificationSeverity("success");
      setNotificationMessage("Added to Favorites");
      setOpenNotification(true);
    } catch (error) {
      setOpenNotificationSeverity("error");
      setNotificationMessage(error.code);
      setOpenNotification(true);
    }
  }

  const handleNotificationClose = () => {
    setOpenNotification(false);
  }


  console.log(flagsData, 'flagsData');

  return (
    <Grid container spacing={4}>
      <Snackbar open={openNotification} autoHideDuration={6000}>
        <Alert
          onClose={handleNotificationClose}
          severity={notificationSeverity}
        >
          {notificationMessage}
        </Alert>
      </Snackbar>

      {flagsData.map((data, index) => {
        return (
          <Grid key={index} item xs={12} md={4} lg={4}>
            <TravelCard
              addFavorite={(favoriteItem) => addToFavorites(favoriteItem)}
              cssConfig={cssConfig}
              showViewMore={true}
              data={data}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

HomePage.propTypes = {};

export default HomePage;
