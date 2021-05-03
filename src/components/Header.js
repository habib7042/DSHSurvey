import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    flex: 1,
  },
  cartButton: {
    color: 'white'
  }
}));
function Header() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.icon}>BD Gadget House</Typography>
          <IconButton>
          <ShoppingCartIcon  className={classes.cartButton}/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
