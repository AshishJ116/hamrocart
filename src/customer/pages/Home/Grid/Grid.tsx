import React from 'react'



const Grid = () => {
  return (
    <div className='grid gap-4 grip-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20'>
      
        <div className='col-span-3 row-span-12 text-white rounded-md'>
         <img className='w-full h-full object-cover rounded-md' src="https://www.arunvastrabhandar.com/images/cat/sherwani/6.jpg"/>
        </div>

        <div className='col-span-2 row-span-6 text-white rounded-md'>
         <img className='w-full h-full object-cover rounded-md' src="https://www.arunvastrabhandar.com/images/cat/sherwani/6.jpg"/>
        </div>

        <div className='col-span-4 row-span-6 text-white rounded-md'>
         <img className='w-full h-full object-cover rounded-md' src="https://www.arunvastrabhandar.com/images/cat/sherwani/6.jpg"/>
        </div>
      
        <div className='col-span-3 row-span-12 text-white rounded-md'>
         <img className='w-full h-full object-cover rounded-md' src="https://www.arunvastrabhandar.com/images/cat/sherwani/6.jpg"/>
        </div>
      
          <div className='col-span-4 row-span-6 text-white rounded-md'>
         <img className='w-full h-full object-cover rounded-md' src="https://www.arunvastrabhandar.com/images/cat/sherwani/6.jpg"/>
        </div>
      
        <div className='col-span-2 row-span-6 text-white rounded-md'>
         <img className='w-full h-full object-cover rounded-md' src="https://www.arunvastrabhandar.com/images/cat/sherwani/6.jpg"/>
        </div>
    </div>
  )
}

export default Grid