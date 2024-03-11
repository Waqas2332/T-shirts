import { useState } from "react";
import Button from "../ui-components/Button";

const FeaturedProductsList = (product) => {
  const [showButton, setShowButton] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const changeImage = (index) => {
    setImageIndex(index);
  };

  return (
    <div
      className="lg:w-[250px] mb-8 shadow-md rounded-lg pb-3 relative"
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <div className="relative -z-10">
        <img
          src={product.product.images[imageIndex].image}
          className="w-[300px]"
        />
      </div>
      {showButton && (
        <>
          {" "}
          <div className="lg:w-[250px] w-full h-[69%] bg-white absolute top-0 z-5 opacity-35 rounded-xl"></div>
          <div className="flex flex-col justify-end items-center lg:w-[250px] w-full h-[69%]  absolute top-0 z-6  rounded-xl">
            <Button className="w-40 bg-white mb-6 hover:text-gray-800">
              Buy Now
            </Button>
          </div>{" "}
        </>
      )}
      <div className="mt-3 ms-4">
        <p>{product.product.title}</p>
        <div className="mt-6">
          <p className="font-bold inline-block me-4">
            $ {product.product.discountedPrice}
          </p>
          <p className="line-through inline-block text-sm">
            $ {product.product.actualPrice}
          </p>
        </div>
        <div className="flex gap-4 mt-4 mb-3 ">
          {product.product.images.map((image, index) => (
            <div key={image.variant}>
              <div
                onClick={() => {
                  changeImage(index);
                }}
                className={`w-4 h-4 rounded-full cursor-pointer ${
                  index === imageIndex ? "w-5 h-5" : ""
                }`}
                style={{
                  background: image.variant,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsList;
