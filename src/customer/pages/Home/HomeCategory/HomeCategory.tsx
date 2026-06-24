import HomeCategoryCard from "./HomeCategoryCard"


const HomeCategory = () => {
  return (
    <div className='flex flex-wrap justify-center gap-7'>
      {[1,1,1,1,1,1,1,1,1,1].map(()=><HomeCategoryCard/>)}
    </div>
  )
}

export default HomeCategory