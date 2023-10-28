import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../../src/firebaseConfig';
import { Grid } from '@mui/material';
import TravelCard from '../../src/components/TravelCard/TravelCard';

const URL = "https://restcountries.com/v3.1/all";
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

const WishlistPage = props => {

  const [favoriteList, setMyFavoriteList] = useState([]);
  // const [flagsData, setFlagsData] = useState([]);
  const travelFavoritesCollection = collection(db, "favoriteTravelSpots");

  const flagsAPIWithAxios = async () => {
    try {
      const { data } = await axios.get(URL);
      const favoritesResponse = await getDocs(travelFavoritesCollection);
      const getFavoriteListItem = data.filter((country) => {
        let isCommon = false;
        favoritesResponse.docs.forEach((favorite) => {
          if (country.name.common === favorite.data().favoriteItem && auth.currentUser.uid === favorite.data().userId) {
            isCommon = true;
          }
  
        })

        return isCommon;
      })

      setMyFavoriteList(getFavoriteListItem);
    } catch (error) {
      console.error("There was an error", error.message);
    }
  };

  useEffect(() => {
    flagsAPIWithAxios();
  }, []);


  return (
    <Grid container spacing={4}>
          {favoriteList.map((data, index) => {
        return (
          <Grid key={index} item xs={12} md={4} lg={4}>
            <TravelCard
              // addFavorite={(favoriteItem) => addToFavorites(favoriteItem)}
              cssConfig={cssConfig}
              showViewMore={true}
              data={data}
            />
          </Grid>
        );
      })}
    </Grid>
  )
}

WishlistPage.propTypes = {}

export default WishlistPage