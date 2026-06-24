
import ElectronicCategory from './ElectronicCategory/ElectronicCategory'
import Grid from './Grid/Grid'
import Deal from './Deal/Deal'
import HomeCategory from './HomeCategory/HomeCategory'

 
const Home = () => {
  return (
    <div className='space-y-10'>
        <ElectronicCategory/>
        <section>
            <Grid/>
        </section>
        <section className='pt-10'>
          <h1 className='text-3xl font-bold text-center text-blue-600 '> Today's Deal </h1>
            <Deal/>
        </section>
        
         <section className='pt-10'>
          <h1 className='text-3xl font-bold text-center text-blue-600 pb-5'> Shop By Category </h1>
            <HomeCategory/>
        </section> 
        <section className='lg:px-20 relative h-[200px] lg:h-[450px] object-cover'>
          <img src="https://t3.ftcdn.net/jpg/18/72/05/18/360_F_1872051802_mHwtpE3W0GHqOcmzhSxeQMGhteYoUsvN.jpg" alt=""/>
          <div className='absolute top-1/2 left-4 lg:left-[15rem] transform -translate-y-1/2 font-sembold lg:text-4xl space-y-3'>
             <h1> Sell Your Product </h1>
          </div>
        </section>
    </div>
  )
}

export default Home