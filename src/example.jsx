import React, { useState, useCallback } from 'react'
import Container from './Container'
const styles = {
  width: '100%',
  height: '100%',
}
export default function DragAroundNaive({selectedImages}) {
  const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true)
  const toggle = useCallback(() => setHideSourceOnDrag(!hideSourceOnDrag), [
    hideSourceOnDrag,
  ])
  return (
    <div style={styles}>
      <Container hideSourceOnDrag={hideSourceOnDrag} selectedImages={selectedImages} />
      <p>
        <label htmlFor="hideSourceOnDrag">
          <input
            id="hideSourceOnDrag"
            type="checkbox"
            checked={hideSourceOnDrag}
            onChange={toggle}
          />
          <small>Hide the source item while dragging</small>
        </label>
      </p>
    </div>
  )
}
