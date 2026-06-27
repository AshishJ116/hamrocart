import React from 'react'
import Logo from '../../components/common/Logo'
import { Button, Divider, IconButton } from '@mui/material'
import { Add, Close, Remove } from '@mui/icons-material'

const CartItemCard = () => {
  return (
     <div className='border border-gray-300 rounded-md relative'>
        <div className='p-5 flex gap-3'>
            <div>
                <img className='w-[90px] rounded-md' src="https://res.cloudinary.com/dz2is5pgg/image/upload/v1765891783/sbysf9uirgkti88t1h74.webp" alt=""/>
            </div>
            <div className='space-y-2'>
                <h1><Logo/></h1>
                <p className='text-gray-600 font-medium text-sm'>Red Floral Patterned Saree</p>
                <p className='text-gray-400 text-xs'><strong>Sold by:</strong> Natural Lifestyle Products Private Limited</p>
                <p className='text-xs'>
                    <strong> 7 days replacement </strong> available
                </p>
                <p className='text-sm text-gray-500'>
                    <strong>Quantity</strong> : 2
                </p>
            </div>
        </div>
        <Divider/>
        <div className='px-5 py-3 flex justify-between items-center'>
            <div className='flex items-center gap-2 w-[140px] jsutify-between'>
                <Button size='small'>
                    <Remove/>
                </Button>
            
            <span className='px-3 font-semibold'>{2}</span>
                 <Button size='small'>
                    <Add/>
                </Button>
            </div>
            <div>
                <p className='text-gray-700 font-semibold'>Rs.3999</p>
            </div>
        </div> 
        <div className='absolute top-1 right-1'>
            <IconButton color="primary">
                <Close/>
            </IconButton>
        </div>
         
    </div>
  )
}

export default CartItemCard