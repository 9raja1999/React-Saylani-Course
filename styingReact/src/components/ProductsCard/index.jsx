import React from 'react'
import ProductImage from '../../assets/banner.jpg'


function ProductCard({showSeeMore}) {

  console.log(showSeeMore);

  if(showSeeMore){
    return <div className='seeMore'>
        <button>SEE MORE</  button>
    </div>
  }

  return (
    <div className='productCard'>
      <img src={ProductImage} alt='' className='' />

      <h2>Iphoine</h2>
      <button>SEE MORE</button>
    </div>
  )
}

export default ProductCard