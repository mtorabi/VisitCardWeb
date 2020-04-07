import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import { makeStyles } from '@material-ui/core/styles';
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

  const images = [
    "00.jpg",
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg",
    "07.jpg",
    "08.jpg",
    "09.jpg",
    "10.jpg",
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={1} direction='row'>

        <Grid item xs={2}>
          <div className="full-height left-sidebar overflow">
            {images.map((item) => (

              <div className="left-sidebar-item">
                  <img src={item} alt="" className="left-sidebar-item-container"/>
              </div>
            ))
            }
          </div>
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
