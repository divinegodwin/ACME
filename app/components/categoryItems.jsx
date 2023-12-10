import React from 'react'
import Button from './Button'

export const CategoryItems = ({ image, description, price}) => {
  return (
    <div className='ml-[6rem] mt-[4rem] flex flex-row flex-wrap mb-20'>
        <div>
            <img src={image} className='w-[100px] h-[100px]'></img>
        </div>
        <div>
            <p className='mt-3 ml-7'>{price}</p>

<Button className= 'text-white p-2 rounded-lg bg-[#00296B] ml-3' label="Add to Cart" />

        </div>

    </div>
  )
}
