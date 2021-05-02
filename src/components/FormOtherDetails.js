import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/styles/ThemeProvider";
import {
  AppBar,
    Button,
  
    CssBaseline,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";

export class FormOtherDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
      e.preventDefault();
      this.props.prevStep()
  }
  render() {
    const { values, handelChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
              <CssBaseline/>
              <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
              ></IconButton>
              <Typography variant="h6">DHS Reunion Survey</Typography>
            </Toolbar>
          </AppBar>
          <Typography variant='h2' gutterBottom component='h2' align='center' color='textPrimary'>Optional Information</Typography>
        <form noValidate autoComplete="off" style={styles.form}>
        <TextField
        style={styles.margin}
            id="standard-basic"
            hintText="Enter Your Occupation"
            label="Occupation"
            onChange={handelChange("occupation")}
            defaultValue={values.occupation}
          />
          <br/>
          <TextField
          style={styles.margin}
            id="standard-multiline-static"
            multiline
            rows={4}
            helperText='Your Facebook, WhatsApp, Etc'
            hintText="Others Way to contact"
            label="Other Contact Method "
            onChange={handelChange("facebook")}
            defaultValue={values.facebook}
          />
          <br/>
          <TextField
          style={styles.margin}
            id="standard-multiline-static"
            multiline
            rows={4}
            helperText='What You think About this Event'
            hintText="Your Personal Opinion"
            label="Your Personal Opinion "
            onChange={handelChange("comment")}
            defaultValue={values.comment}
          />
          <br/>
          <Button variant='contained' color='primary'
          style={styles.button}
          onClick={this.continue}>Continue</Button>
        <Button variant='contained' color='primary'
          style={styles.button}
          onClick={this.back}>Go Back</Button>
        </form>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
    button: {
        margin: 15
    },
    margin: {
        marginTop: 15,
        width: 300
    },
    form : {
        textAlign: 'center'
    }
}

export default FormOtherDetails;
