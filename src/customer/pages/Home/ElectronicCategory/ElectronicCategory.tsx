
import ElectronicCategoryCard from './ElectronicCategoryCard'


const electronics=[
    {
        section: "ELECTRIC_CATEGOTIES",
        name:"Laptop",
        image:"https://rukminim2.flixcart.com/image/1536/1536/xif0q/computer/c/h/9/-original-imah43farzvmfftc.jpeg?q=90",
        categoryID:"laptops"
    },
    {
        section: "ELECTRIC_CATEGOTIES",
        name:"Mobile",
        image:"https://rukminim2.flixcart.com/image/1536/1536/xif0q/mobile/q/2/f/z11x-5g-i2507-iqoo-original-imahhzhhahgczhnx.jpeg?q=90",
        categoryID:"mobiles"
    },
    {
         section: "ELECTRIC_CATEGOTIES",
        name:"Smartwatch",
        image:"https://rukminim2.flixcart.com/image/1536/1536/xif0q/smartwatch/l/2/f/-original-imaha8kabchjfqhe.jpeg?q=90",
        categoryID:"smart_watches"
    },
    {
         section: "ELECTRIC_CATEGOTIES",
        name:"Headphones",
        image:"https://rukminim2.flixcart.com/image/1536/1536/xif0q/headphone/y/s/j/wireless-headphone-bt-5-0-over-ear-foldable-with-built-in-mic-sd-original-imahea3jdgx6a36x.jpeg?q=90",
        categoryID:"headphones_headsets"
    },
    {
         section: "ELECTRIC_CATEGOTIES",
        name:"Speaker",
        image:"https://rukminim2.flixcart.com/image/1536/1536/xif0q/speaker/c/j/t/-original-imah6qzqpvm4s7wk.jpeg?q=90",
        categoryID:"speakers"
    },
    {
         section: "ELECTRIC_CATEGOTIES",
        name:"Tv",
        image:"https://rukminim2.flixcart.com/image/1536/1536/xif0q/television/8/l/q/jswp32cshd-sansui-original-imahz3gfem6juzkb.jpeg?q=90",
        categoryID:"television"
    },
    {
         section: "ELECTRIC_CATEGOTIES",
        name:"camera",
        image:"https://rukminim2.flixcart.com/image/1536/1536/xif0q/dslr-camera/j/u/p/-original-imahbymfhgutf4dn.jpeg?q=90",
        categoryID:"cameras"
    },
]

const ElectronicCategory = () => {
  return (
    <div className='flex flex-wrap justify-between py-5 lg:px-20 border-b'>
        {electronics.map((item)=><ElectronicCategoryCard item={item}/>)}

    </div>
  )
}

export default ElectronicCategory