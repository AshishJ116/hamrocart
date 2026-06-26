import { useState } from "react"
import Logo from "../../../components/common/Logo";
import { Add, AddShoppingCart, Favorite, LocalShipping, Remove, Shield, Star, Wallet, WorkspacePremium } from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import SimilarProduct from "./SimilarProduct";



const images = [
  "https://res.cloudinary.com/dz2is5pgg/image/upload/v1765891783/sbysf9uirgkti88t1h74.webp",
  "https://res.cloudinary.com/dz2is5pgg/image/upload/v1765891793/qkbp2loedkeaoawnorpg.webp",
  "https://res.cloudinary.com/dz2is5pgg/image/upload/v1765891801/w8mz4nwiufiuut1nsj7i.webp",
  "https://res.cloudinary.com/dz2is5pgg/image/upload/v1765891804/p4jdqjjwgam0xslnxvwc.webp",
  "https://res.cloudinary.com/dz2is5pgg/image/upload/v1765891808/rbhdqkkirjrkabpzqyg5.webp"
]

const ProductDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1)

  const handleChangeCurrentImage = (index: number) => setCurrentImage(index);
  // const handleQuantityChange = (value: number) => setQuantity(value + quantity)
  const handleQuantityChange = (value: number) => setQuantity((prev) => Math.max(0, prev + value));


  return (
    <div className="min-h-screen px-5 lg:px-20 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        <section className="flex flex-col lg:flex-row gap-5">

          <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
            {images.map((item, index) => <img onClick={() => handleChangeCurrentImage(index)} className='lg:w-full w-[50px] cursor-pointer rounded-md' src={item} alt="" />)}
          </div>
          <div className='w-full lg:w-[85%]'>
            <img src={images[currentImage]} className='rounded-md' alt="" />
          </div>

        </section>

        <section>
          <h1><Logo /></h1>
          <p className="text-gray-600 font-semibold">Red Floral Patterned Saree</p>
          <div className='flex justify-between items-center py-2 border border-gray-500 w-[180px] px-3 mt-5'>
            <div className='flex gap-1 items-center'>
              <span>4</span>
              <Star color='secondary' />
            </div>
            <Divider orientation='vertical' flexItem />
            <span> 478 Rating</span>
          </div>

          <div className='space-y-2 pt-5'>
            <div className="price flex items-center gap-3">
              <span className="font-semibold">
                Rs.2499
              </span>
              <span className="text font-thin line-through text-gray-400">
                Rs.3999
              </span>
              <span className="font-semibold text-blue-600">
                38% off
              </span>
            </div>
            <p className='text-sm'>Inclusive of all taxes. Free shipping above Rs.2000.</p>
          </div>
          <div className='mt-7 space-y-3'>
            <div className='flex items-center gap-4'>
              <Shield color='primary' />
              <p>Authentic & Quality Assured </p>
            </div>

            <div className='flex items-center gap-4'>
              <WorkspacePremium color='primary' />
              <p>100% money back gurantee </p>
            </div>

            <div className='flex items-center gap-4'>
              <LocalShipping color='primary' />
              <p>Free Shipping & Returns </p>
            </div>

            <div className='flex items-center gap-4'>
              <Wallet color='primary' />
              <p>Pay on delivery might be available</p>
            </div>

          </div>
          <div className='mt-7 space-y-2'>
            <h1>QUANTITY</h1>
            <div className="flex items-center gap-2 w-[140px] justify-between">
              <Button onClick={() => handleQuantityChange(-1)} variant='outlined'><Remove /></Button>
              <span>{quantity}</span>
              <Button onClick={() => handleQuantityChange(1)} variant='outlined'><Add /></Button>
            </div>
          </div>
          <div className='mt-12 flex items-center gap'>
            <Button startIcon={<AddShoppingCart />} fullWidth sx={{ py: "1rem" }}>Add To Bag</Button>

            <Button startIcon={<Favorite />} fullWidth sx={{ py: "1rem" }}>Wishlist</Button>

          </div>
          <div className="mt-5">
            <p>Printed Kanjivaram saree made from a luxurious silk blend with elegant traditional motifs. Features a graceful pink shade that adds charm and sophistication. Perfect for festive occasions, weddings, and special celebrations. </p>
          </div>
        </section>
      </div>
        <section className="mt-20">
          <h1 className="text-lg font-bold"> Similar Product</h1>
          <div className="pt-5">
              <SimilarProduct/>
              
          </div>
        </section>

    </div>
  )
}

export default ProductDetails