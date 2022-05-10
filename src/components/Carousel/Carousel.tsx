import React from 'react'
import CarouselItem from './CarouselItem/CarouselItem'
import './Carousel.css'

const Carousel = () => {
  return (
    <div className="carouselContainer" style={{transform: "translateX(100%);"}}>
        <CarouselItem>hello</CarouselItem>
        <CarouselItem>hello2</CarouselItem>
        <CarouselItem>hello3</CarouselItem>
    </div>
  )
}

export default Carousel