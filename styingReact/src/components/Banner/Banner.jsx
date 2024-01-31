import React from 'react'
import bannerImage from '../../assets/banner.jpg'
import FilterForm from '../Forms/FilterForm'


function Banner() {
  return (
    <div className='bannerContainer'>
        <img className='bannerImage' src={bannerImage} alt="" srcset="" />

        <div className='contentContainer'>
            <FilterForm />
        </div>
    </div>
  )
}

export default Banner