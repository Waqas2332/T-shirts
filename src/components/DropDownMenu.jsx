import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="dropdown relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="dropdown-button flex items-center text-gray-800 font-bold rounded-md ">
        {title}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="dropdown-arrow ml-1 text-xs"
        >
          &#8593; {/* Upward arrow symbol */}
        </motion.span>
      </p>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="dropdown-content absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul>
            {items.map((item) => (
              <li
                key={item}
                className="py-2 px-4 text-sm font-inter hover:bg-gray-100"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
