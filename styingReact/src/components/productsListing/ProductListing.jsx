import React, { useEffect, useRef } from 'react'
import Slider from "react-slick";
import ProductCard from '../ProductsCard'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

function ProductListing() {
  const sliderRef = useRef(null)

  const handleNext = () => {
    sliderRef.current.slickNext()
  }
  const handlePrev = () => {
    sliderRef.current.slickPrev()
  }



  return (
    <div>
      <h1>Products</h1>
      <button onClick={handleNext}>NEXT</button>
      <button onClick={handlePrev}>PREV</button>
      <Slider ref={sliderRef} {...settings}>
        {
          [1, 2, 3, 1].map((product, idx) => {
            return <div key={idx}>
              <ProductCard showSeeMore={idx === 3 ? true : false} />
            </div>
          })
        }
      </Slider>
    </div>
  )
}

export default ProductListing