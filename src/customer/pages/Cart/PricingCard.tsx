import { Divider } from '@mui/material'
import React from 'react'

const PricingCard = () => {
  return (
   <div className=''>
        <div className='space-y-3 p-5'>
            <div className='flex justify-between items-center'>
                <span>Subtotal</span>
                <span>Rs.{2499}</span>
            </div>
             <div className='flex justify-between items-center'>
                <span>Discount</span>
                <span>Rs.{1500}</span>
            </div>
             <div className='flex justify-between items-center'>
                <span>Shipping </span>
                <span>Rs.{50}</span>
            </div>
             <div className='flex justify-between items-center'>
                <span>Platform Fee</span>
                <span>Free</span>
            </div>




        </div>
        <Divider/>
         <div className='font-medium px-5 py-2 flex justify-between items-center'>
                <span>Total</span>
                <span>Rs.{2499}</span>
            </div>

   </div> 
  )
}

export default PricingCard