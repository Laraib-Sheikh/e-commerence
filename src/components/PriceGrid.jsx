import React from 'react'

const PriceGrid = ({ plan, price, label, about }) => {
  return (
    <div className='flex flex-col justify-center items-start bg-white px-6 pt-10 pb-20 rounded-xl grap-8 border-[3px] border-green-800'>
    <h1 className='text-green-00 text-3xl'>{plan}</h1>
    <h1 className='text-green-800 text-5xl font-bold mt-4'>{price}</h1>
    <p className='bg-green-800 text-white px-6 py-2 mt-4 rounded-md text-[20px] hover:bg-black hover:text-white cursor-pointer'>{label}</p>
    <p className='text-slate-800 mt-2 text-xl'>{about}</p>
    </div>
  )
}

export default PriceGrid
