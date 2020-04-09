import React, { useState , useEffect, useRef } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import Box from './Box'
import update from 'immutability-helper'
const styles = {
  width: '100%',
  height: '100%',
  // border: '1px solid black',
  position: 'relative',
}
const Container = ({ hideSourceOnDrag , selectedImages }) => {
  
  
  const [boxes, setBoxes] = useState({});

  // const [boxes, setBoxes] = useState({
  //   0: { top: 20, left: 80, title: '00.jpg' },
  //   1: { top: 180, left: 20, title: '01.jpg' },
  //   2: { top: 150, left: 150, title: '02.jpg' }
  // })

  useEffect(() => {

    updateImages(selectedImages);

  }, [selectedImages])

  function updateImages (selectedImages){

    let difference = selectedImages.filter(x => !prevSelectedImages.includes(x));

    let boxesObj = {...boxes};

    difference.forEach((item) => {

      boxesObj[selectedImages.length - 1] = {};

      boxesObj[selectedImages.length - 1].top = Math.floor(Math.random() * 200) + 1; ;
      boxesObj[selectedImages.length - 1].left = Math.floor(Math.random() * 200) + 1; ;
      boxesObj[selectedImages.length - 1].title = item;
    });

    setBoxes(boxesObj);
  
  }

  const prevSelectedImages = usePrevious(selectedImages);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      moveBox(item.id, left, top)
      return undefined
    },
  })
  const moveBox = (id, left, top) => {
    setBoxes(
      update(boxes, {
        [id]: {
          $merge: { left, top },
        },
      }),
    )
  }
  return (
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map((key) => {
        const { left, top, title } = boxes[key]
        return (
          <Box
            key={key}
            id={key}
            left={left}
            top={top}
            hideSourceOnDrag={hideSourceOnDrag}
          >
            {/* {title} */}
            <img src={title} alt="" style={{width: '100px', height: '100px'}}/>
          </Box>
        )
      })}
    </div>
  )
}
export default Container
