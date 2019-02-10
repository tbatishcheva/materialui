import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Fingerprint from '@material-ui/icons/Fingerprint';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import Grid from '@material-ui/core/Grid';
import MediaCard from './Card';
import Navbar from './Navbar';


const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: blue,
  },
});

const styles = () => ({
  container: {
    display: 'flex',
    margin: '20px',
  },
  button: {
    display: 'flex',
    margin: '10px',
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Navbar />
          <div className={classes.container}>
            <div className={classes.button}>
              <Button variant="outlined" color="primary">
                <Fingerprint />
              </Button>
              <div className={classes.button} />
              <Button variant="contained" color="secondary">
                <Fingerprint />
              </Button>
            </div>
          </div>
          <div className={classes.container}>
            <TextField placeholder="Placeholder here" label="Basic TextField" />
          </div>
          <div className={classes.container}>
            <Grid container spacing={24}>
              <Grid item xs={4}>
                <MediaCard />
              </Grid>
              <Grid item xs={2}>
                <MediaCard />
              </Grid>
              <Grid item xs={4}>
                <MediaCard />
              </Grid>
            </Grid>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default withStyles(styles)(App);
