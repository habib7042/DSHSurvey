import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/styles/ThemeProvider";
import {
  AppBar,
    Button,
    Container,
  CssBaseline,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";

export class ConfirmData extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { name, mobile, email, occupation, comment, facebook },
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <CssBaseline />
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                color="primary"
                aria-label="menu"
              ></IconButton>
              <Typography variant="h6">DHS Reunion Survey</Typography>
            </Toolbar>
          </AppBar>
          <Typography
            variant="h2"
            component="h2"
            color="textSecondary"
            gutterBottom
            align="center"
          >
            Check Your Information
          </Typography>
          <br />
          <Container maxWidth='sm'>
          <List style={styles.list}>
            <ListItem>
              <ListItemText primary="Your FullName" secondary={name} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Your Phone" secondary={mobile} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Your Email" secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Your Occupation" secondary={occupation} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Other way to contact"
                secondary={facebook}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Your Opinion" secondary={comment} />
            </ListItem>
          </List>
          <br/>
          <Button variant='contained' color='primary'
          style={styles.button}
          onClick={this.continue}>Continue</Button>
        <Button variant='contained' color='primary'
          style={styles.button}
          onClick={this.back}>Go Back</Button>
          </Container>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles ={
    button: {
        margin: 10
    },
    list : {
        textAlign: 'center'
    }
}

export default ConfirmData;
