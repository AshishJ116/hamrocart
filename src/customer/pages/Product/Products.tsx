import { Divider, FormControl, InputLabel, MenuItem, Pagination, Select } from "@mui/material"
import FilterSection from "./FilterSection"
import { useState } from "react"
import ProductCard from "./ProductCard"

const products =
{
  images: [
    "https://res.cloudinary.com/dz2is5pgg/image/upload/v1765891783/sbysf9uirgkti88t1h74.webp",
    "https://res.cloudinary.com/dz2is5pgg/image/upload/v1765891793/qkbp2loedkeaoawnorpg.webp",
    "https://res.cloudinary.com/dz2is5pgg/image/upload/v1765891801/w8mz4nwiufiuut1nsj7i.webp",
    "https://res.cloudinary.com/dz2is5pgg/image/upload/v1765891804/p4jdqjjwgam0xslnxvwc.webp",
    "https://res.cloudinary.com/dz2is5pgg/image/upload/v1765891808/rbhdqkkirjrkabpzqyg5.webp",
    
  ],
  seller: {
    businessDetails: {
      businessName: "Pablo"
    }
  }
}


const Products = () => {
  const [sort, setSort] = useState("price_low")
  const handleSortProduct = (event: any) => { setSort(event.target.value) }
  return (
    <div className='-z-10 mt-10'>

      <div>
        <h1 className='text-3xl text-center font-bold text-gray-700 pb-5 px-9 uppercase space-x-2'>women sarees</h1>
      </div>

      <div className='lg:flex'>

        <section className='hidden lg:block w-[20%] min-h-screen border-gray-200'>
          <FilterSection />
        </section>
        <section className='w-full lg:w-[80%] space-y-5'>

          <div className='flex justify-between items-center px-9 h-[40px] '>
            <div>

            </div>
            <FormControl>
              <InputLabel id="sort-label">Sort</InputLabel>
              <Select
                labelId="sort"
                id="sort"
                value={sort}
                label="Sort"
                onChange={handleSortProduct}
              >
                <MenuItem value={"price_low"}>Price: Low - High</MenuItem>
                <MenuItem value={"price_high"}>Price: High - Low</MenuItem>
                <MenuItem value={"rating"}>Customer Rating</MenuItem>
              </Select>
            </FormControl>

          </div>
          <Divider />

          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 mt-5  px-5 justify-center'>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => <div key={index * 3}><ProductCard item={products} />
            </div>)}
          </div>
          <div className='flex flex-col items-center justify-center'>
          <Pagination count={10} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Products