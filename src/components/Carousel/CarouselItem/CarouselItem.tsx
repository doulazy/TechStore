import React from 'react'
import './CarouselItem.css'

type CarouselItemProps = {
    children: React.ReactNode,
}

const CarouselItem = ({children}: CarouselItemProps) => {
  return (
    <div className="carouselItem">
        {children}
    </div>
  )
}

export default CarouselItem