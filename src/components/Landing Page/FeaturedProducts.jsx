import { useEffect, useState } from "react";

import FeaturedProductsMenu from "./FeaturedProductsMenu";
import FeaturedProductsList from "./FeaturedProductsList";
import { PRODUCTS_LIST } from "../../constants/FeaturedProductsList";

const menuItems = [
  { name: "Best Sellers" },
  { name: "St. Patrick's Day" },
  { name: "Easter" },
];

const FeaturedProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [products, setProducts] = useState(
    PRODUCTS_LIST.filter((product) => product.category === menuItems[0].name)
  );

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    filterProducts(activeIndex);
  }, [activeIndex]);

  const filterProducts = (index) => {
    setProducts(
      PRODUCTS_LIST.filter(
        (product) => product.category === menuItems[index].name
      )
    );
  };

  return (
    <section className="w-[90%] mx-auto mt-20 flex flex-col items-center space-y-6">
      <div className="font-heading text-4xl font-semibold w-full text-center mb-3">
        Featured products
      </div>
      <div>
        <FeaturedProductsMenu
          menuItems={menuItems}
          activeIndex={activeIndex}
          handleItemClick={handleItemClick}
        />
      </div>
      <div className="mx-auto font-inter">
        <div className="flex flex-wrap justify-center gap-4">
          {products.map((product) => (
            <FeaturedProductsList product={product} key={product._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
