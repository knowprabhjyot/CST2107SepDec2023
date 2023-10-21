import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const TravelCard = ({ data, showViewMore, cssConfig }) => {
  const navigate = useNavigate();

  const navigateToCountry = () => {
    // It should navigate me to the details page
    navigate(`/detail/${data.name.common}`);
  };

  return (
    <Card style={{
        height: cssConfig.height,
        width: cssConfig.width,
        display: cssConfig.containerFlex.display,
        flexDirection: cssConfig.containerFlex.flexDirection,
        alignItems: cssConfig.containerFlex.alignItems,
    }}>
      <CardMedia sx={{ height: cssConfig.imageHeight, width: cssConfig.imageWidth }} image={data.flags.png} />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {data.name.common}
        </Typography>
        <Box display="flex" flexDirection="column">
          <Typography>Population: {data.population}</Typography>
          <Typography>Region: {data.region}</Typography>

          {
            !showViewMore && <Box>
                <Typography>
                    Area: {data.area}
                </Typography>
                </Box>
          }

        </Box>
      </CardContent>
      <CardActions>
        {
          showViewMore && <Button onClick={navigateToCountry}>View More</Button>
          // showViewMore ? <Button onClick={navigateToCountry}>View More</Button> : null
        }
      </CardActions>
    </Card>
  );
};

TravelCard.propTypes = {
  data: PropTypes.any,
  showViewMore: PropTypes.bool,
  cssConfig: PropTypes.any
};

export default TravelCard;
