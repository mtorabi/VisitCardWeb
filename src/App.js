import React , {useState} from 'react';
// import logo from './logo.svg';
import './App.scss';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Example from './example';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

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

  const [selectedImages, setSelectedImages] = useState([]);

  const [clickedImage, setClickedImage] = useState('');

  const [clickDown, setClickDown] = useState(false);

  function onmouseup(event) {

    console.log("up");

  }

  function onmousedown(event , item) {

    // var x = event.clientX;
    // var y = event.clientY;
    // console.log("x", x , "y", y , 'item', item);

    setClickedImage(item);
    setClickDown(true);

  }

  document.onmousedown = function(){

    console.log('down');

  }

  document.onmouseup = function(){

    if(clickDown){
      
      setSelectedImages(selectedImages => selectedImages.concat(clickedImage));
      setClickDown(false);
    }

  }

  return (
    <div className={`${classes.root} select-disable`}>
      <Grid container spacing={1} direction='row'>

        <Grid item xs={2}>
          <div className="full-height left-sidebar overflow">
            {images.map((item) => (

              <div key={item} className="left-sidebar-item" onMouseDown={e => onmousedown(e , item)}>
                <img src={item} alt="" className="left-sidebar-item-container" />
              </div>
            ))
            }
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className="full-height">
            <div className="header hf-10" />

            <div className="main hf-80" id="main" onMouseUp={e => onmouseup(e)}>
              <DndProvider backend={Backend}>
                <Example selectedImages={selectedImages} />
              </DndProvider>
            </div>

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
