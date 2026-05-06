import React from 'react'
import height from './../../node_modules/dom-helpers/esm/height';

const CarouselImage = (props) => {
  return (
    <div>
      <img src={props.text} style ={{height :"550px", width:"100vw", }} alt="" />
    </div>
  )
}

export default CarouselImage;