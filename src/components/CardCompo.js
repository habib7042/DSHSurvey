import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    height: 240,
  },
}));

function CardCompo(props) {
  const classes = useStyles();
  const { title, price, avatarUrl, imageUrl, description } = props;
  return (
    <Card>
      <CardHeader
        avatar={<Avatar alt="User Image" src={avatarUrl} />}
        action={
          <IconButton aria-label="favorite">
            <FavoriteIcon />
          </IconButton>
        }
        title={title}
        subheader={price}
      />
      <CardMedia className={classes.cardStyle} image={imageUrl} />
      <CardContent>
          <Typography variant='body2' component='p' > {description} </Typography>
      </CardContent>
      <CardActions>
          <Button size='small'>Buy Now</Button>
          <Button size='small'>Add To Cart</Button>
      </CardActions>
    </Card>
  );
}

export default CardCompo;
