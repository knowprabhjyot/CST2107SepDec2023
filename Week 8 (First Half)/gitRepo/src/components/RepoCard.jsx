import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { PropTypes } from 'prop-types';

export const RepoCard = ({ data }) => {
  const sendToRepo = () => {
    window.open(data.html_url);
  };

  return (
    <Card onClick={sendToRepo}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img width={"100%"} src={data.owner.avatar_url} />
          </Avatar>
        }
        title={data.owner.login}
        subheader={data.owner.id}
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
        <Typography>{data.full_name}</Typography>
      </CardContent>
    </Card>
  );
};


RepoCard.propTypes = {
    data: PropTypes.any
}