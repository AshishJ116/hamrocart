import ProductCard from "../ProductCard"

const products =
{
  images: [
    "https://res.cloudinary.com/dz2is5pgg/image/upload/v1765891783/sbysf9uirgkti88t1h74.webp",
    "https://res.cloudinary.com/dz2is5pgg/image/upload/v1765891793/qkbp2loedkeaoawnorpg.webp",
    "https://res.cloudinary.com/dz2is5pgg/image/upload/v1765891801/w8mz4nwiufiuut1nsj7i.webp",
    "https://res.cloudinary.com/dz2is5pgg/image/upload/v1765891804/p4jdqjjwgam0xslnxvwc.webp",
    "https://res.cloudinary.com/dz2is5pgg/image/upload/v1765891808/rbhdqkkirjrkabpzqyg5.webp"
  ],
  seller: {
    businessDetails: {
      businessName: "Pablo",
    },
  },
};
const SimilarProduct = () => {
  return (
    <div className='grid lg:grid-cols-5 mf:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between gap-2 gap-y-8'>

       {[1, 1, 1, 1, 1, 1, 1].map (()=><ProductCard item={products}/>)}

    </div>
  )
}

export default SimilarProduct