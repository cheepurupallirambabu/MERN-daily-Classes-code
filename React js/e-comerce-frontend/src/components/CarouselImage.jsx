import React from 'react'

const CarouselImage = (props) => {
  return (
    <div style={{ backgroundColor: '#f8f9fa' }}>
      <img className="d-block w-100" src={props.text} style={{ height: "60vh", objectFit: "cover", maxHeight: "600px" }} alt="carousel slide" />
    </div>
  )
}

export default CarouselImage;