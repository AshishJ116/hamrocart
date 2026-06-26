
import React, { useEffect, useState } from "react";
import "./ProductCard.css";

interface ProductCardProps {
  item: {
    seller: any;
    images?: string[];
    title?: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isHovered && item?.images && item.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % item.images!.length);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, item?.images]);

  if (!item || !item.images || item.images.length === 0) {
    return (
      <div className="group px-4 relative">
        <div className="w-[250px] sm:w-full h-[350px] bg-gray-100 flex items-center justify-center">
          No Image Available
        </div>
      </div>
    );
  }

  return (
    <div className="group px-4 relative">
      <div
        className="relative w-[250px] sm:w-full h-[350px] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {item.images.map((image: string, index: number) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index + 1}`}
            className="card-media absolute top-0 left-0 w-full h-full object-cover object-top transition-transform duration-500"
            style={{
              transform: `translateX(${(index - currentImage) * 100}%)`,
            }}
          />
        ))}
      </div>
      <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
        <div className="name space-y">

          <h1 className="font-semibold text-lg">
            {item.seller.businessDetails?.businessName}
          </h1>
          <p>Red Floral Patterned Saree</p>

        </div>
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

      </div>
    </div>
  );
};

export default ProductCard;