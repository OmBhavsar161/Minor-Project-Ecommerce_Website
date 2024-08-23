import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
    
  return (
    <div className='flex gap-3 ml-8 mb-8 font-semibold mt-6'>
      Home <img src={arrow_icon} alt="" className='h-5 mt-[5px]'/> Products <img src={arrow_icon} alt="" className='h-5 mt-[5px]'/> {product.category_view} <img src={arrow_icon} alt="" className='h-5 mt-[5px]'/> {product.name}
    </div>
  )
}

export default Breadcrum
