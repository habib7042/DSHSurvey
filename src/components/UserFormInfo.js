import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/styles/ThemeProvider";
import {
  AppBar,
    Button,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";

export class UserFormInfo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handelChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
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
          <Typography variant='h2' component='h2' align='center' color='textPrimary'>Main Information</Typography>
        <form noValidate autoComplete="off" style={styles.form}>
        <TextField
        style={styles.margin}
            id="standard-basic"
            hintText="Enter Your Name"
            label="Full Name"
            onChange={handelChange("name")}
            defaultValue={values.name}
          />
          <br/>
          <TextField
          style={styles.margin}
            id="standard-basic"
            hintText="Enter Your Phone Number"
            label="Phone"
            onChange={handelChange("mobile")}
            defaultValue={values.mobile}
          />
          <br/>
          <TextField
          style={styles.margin}
            id="standard-basic"
            hintText="Enter Your Phone Email"
            label="Email"
            onChange={handelChange("email")}
            defaultValue={values.email}
          />
          <br/>
          <Button variant='contained' color='primary'
          style={styles.button}
          onClick={this.continue}>Continue</Button>
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

export default UserFormInfo;
