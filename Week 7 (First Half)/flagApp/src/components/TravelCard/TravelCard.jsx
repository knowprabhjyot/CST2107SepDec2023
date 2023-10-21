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

const TravelCard = ({ data }) => {
  console.log(data.flags.png);
  return (
    <Card>
      <CardMedia sx={{ height: 140 }} image={data.flags.png} />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {data.name.common}
        </Typography>
        <Box display="flex" flexDirection="column">
          <Typography>Population: {data.population}</Typography>
          <Typography>Region: {data.region}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button>View More</Button>
      </CardActions>
    </Card>
  );
};

TravelCard.propTypes = {
  data: PropTypes.any,
};

export default TravelCard;
