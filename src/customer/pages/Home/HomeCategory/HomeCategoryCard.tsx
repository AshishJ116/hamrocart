

const HomeCategoryCard = () => {
  return (
    <div className='flex flex-col justify-center items-center group cursor-pointer'>
    
        <div className='custom-border w-[150px] lg:w-[249px] h-[150px] lg:h-[249px] rounded-full bg-teal-400'>
            <img className='group-hover:scale-95 transition-transform duration-700 object-cover object-top h-full w-full rounded-full' src={"https://i5.walmartimages.com/seo/LEPOWER-Metal-Desk-Lamp-Adjustable-Gooseneck-Reading-Lamp-for-Home-Office-Bedroom-Black_dceb4fc3-9837-41a0-8823-f4e1fe0847dc.d49bfcf145da1e14ed52d27fbf5457c8.jpeg"} alt=""/>  
              
        </div>
        <h1 className='font-medium'>{"Lamp"}</h1>
        
    
    </div>
  )
} 

export default HomeCategoryCard