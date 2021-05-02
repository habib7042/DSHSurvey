import {
  AppBar,
  CssBaseline,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";

function SuccessM() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" align="center">
            DHS Reunion Survey
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography
        variant="h4"
        component="h3"
        color="primary"
        gutterBottom
        align="center"
      >
        Your Data was successfully submitted
      </Typography>
      <Typography
        variant="h6"
        component="h6"
        color="textSecondary"
        align="center"
        gutterBottom
      >
        We will contact you soon
      </Typography>
      <IconButton aria-label="delete" style={styles.margin} size="small" >
        <Link href="https://facebook.com/dighalihs" ><FacebookIcon fontSize="inherit" />DHS on Facebook</Link>
      </IconButton>
    </React.Fragment>
  );
}
const styles = {
  margin: {
    margin: 10,
    display: 'flex'
  },
};

export default SuccessM;
