import { motion } from "framer-motion";

const MenuItem = ({ active, onClick, children }) => {
  return (
    <motion.li
      className={`py-2 p-2 cursor-pointer font-inter font-medium  ${
        active
          ? "border-b-2 border-[#137077] text-[#137077]"
          : "text-[#4B5563] border-b border-[#4B5563]"
      }`}
      onClick={onClick}
    >
      {children}
    </motion.li>
  );
};

const FeaturedProductsMenu = ({ menuItems, activeIndex, handleItemClick }) => {
  return (
    <ul className="flex">
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          active={activeIndex === index}
          onClick={() => handleItemClick(index)}
        >
          {item.name}
        </MenuItem>
      ))}
    </ul>
  );
};

export default FeaturedProductsMenu;
