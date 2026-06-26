
import ElectronicCategory from './ElectronicCategory/ElectronicCategory'
import Grid from './Grid/Grid'
import Deal from './Deal/Deal'
import HomeCategory from './HomeCategory/HomeCategory'
import { Button } from '@mui/material'
import Storefront from '@mui/icons-material/Storefront'
import logo2 from '../../../assets/logo2.png'
import lady from '../../../assets/lady.png'

const Home = () => {
  return (
    <div className='space-y-10'>
        <ElectronicCategory/>
        <section>
            <Grid/>
        </section>
        <section className='pt-10'>
          <h1 className='text-3xl font-bold text-center '> Today's Deal </h1>
            <Deal/>
        </section>
        
         <section className='pt-10'>
          <h1 className='text-3xl font-bold text-center pb-5'> Shop By Category </h1>
            <HomeCategory/>
        </section> 
        <section className='lg:px-20 relative h-[200px] lg:h-[450px] object-cover'>
         {/* <div><img src={lady} alt=""/> </div> */}
         <div><img src={lady} alt=""/> </div>
          <div className='absolute top-1/2 left-4 lg:left-[15rem] transform -translate-y-1/2 font-sembold lg:text-4xl space-y-3'>
             <h1> Sell Your Product </h1>
              <p className='text-lg md:text-2xl flex items-center gap-2'>With <img src={logo2} alt="" className='h-15 w-50' /> </p>
             
                <div className='pt-6 flex justify-center'> 
                  <Button startIcon={<Storefront/>} variant='contained' sx={{backgroundColor: "#1976d2", "&:hover": {backgroundColor: "#1565c0",},}}> Become Seller </Button>
                </div>
          </div>

        </section>
    </div>
  )
}

export default Home