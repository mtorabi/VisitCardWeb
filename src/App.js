import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%'
  },
}));


function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction='row'>

        <Grid item xs={2}>
          <div className="full-height left-sidebar" />
        </Grid>
        <Grid item xs={8}>
          <div className="full-height">
            <div className="header hf-10" />

            <div className="main hf-80" />

            <div className="footer hf-10" />
          </div>

        </Grid>
        <Grid item xs={2}>
          <div className="full-height right-sidebar" />
        </Grid>
      </Grid>
    </div >
  );
}

export default App;
