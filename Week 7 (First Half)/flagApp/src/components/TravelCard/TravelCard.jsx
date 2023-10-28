import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';

const TravelCard = ({ data, showViewMore, cssConfig, addFavorite }) => {

  const navigate = useNavigate();
  const [travelItem, setTravelItem] = useState(data);
  const [favoriteSelected, setFavoriteSelected] = useState(data.isFavorite);

  const navigateToCountry = () => {
    // It should navigate me to the details page
    navigate(`/detail/${travelItem.name.common}`);
  };

  const addToFavorites = () => {
    addFavorite(travelItem.name.common);
    setFavoriteSelected(true);
  }

 
  return (
    <Card
      style={{
        height: cssConfig.height,
        width: cssConfig.width,
        display: cssConfig.containerFlex.display,
        flexDirection: cssConfig.containerFlex.flexDirection,
        alignItems: cssConfig.containerFlex.alignItems,
      }}
    >
      <CardMedia
        sx={{ height: cssConfig.imageHeight, width: cssConfig.imageWidth }}
        image={travelItem.flags.png}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {travelItem.name.common}
        </Typography>
        <Box display="flex" flexDirection="column">
          <Typography>Population: {travelItem.population}</Typography>
          <Typography>Region: {travelItem.region}</Typography>

          {!showViewMore && (
            <Box>
              <Typography>Area: {travelItem.area}</Typography>
            </Box>
          )}
        </Box>
      </CardContent>
      <CardActions style={{ justifyContent: "space-between" }}>
        {
          showViewMore && <Button onClick={navigateToCountry}>View More</Button>
          // showViewMore ? <Button onClick={navigateToCountry}>View More</Button> : null
        }

        <IconButton aria-label="Favorite" onClick={addToFavorites}>
          <FavoriteIcon color={favoriteSelected ? 'error' : 'primary'} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

TravelCard.propTypes = {
  data: PropTypes.any,
  showViewMore: PropTypes.bool,
  cssConfig: PropTypes.any,
  addFavorite: PropTypes.func.isRequired
};

export default TravelCard;
