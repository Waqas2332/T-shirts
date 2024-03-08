import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"; // Import motion

import logo from "../assets/tshirts-logo.svg";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="pt-6 shadow-md fixed top-0 w-full bg-white z-10 pb-6">
      <nav className="flex w-[90%] m-auto justify-between items-center relative">
        <div>
          <img src={logo} alt="Tshirts" />
        </div>
        <div className="flex w-[70%] items-center me-8">
          <div className="flex font-inter font-semibold  items-center gap-8 max-xl:hidden">
            <p>Custom Apparel</p>
            <p>Collections</p>
            <p>Apparel</p>
            <p>Gifts</p>
          </div>
          <div className="border h-10 w-[300px] rounded-md ms-auto flex ps-1 items-center border-[#e9e8e8]">
            <CiSearch size={24} color="#717272" />
            <input type="text" className="outline-none ms-3" />
          </div>
        </div>

        <div className="flex gap-3 text-2xl">
          <IoPersonOutline className="cursor-pointer" />
          <HiOutlineShoppingBag className="cursor-pointer" />
          <IoMdMenu
            className="max-xl:block hidden cursor-pointer"
            onClick={() => {
              setIsDrawerOpen(true);
            }}
          />
        </div>
      </nav>

      {/* Use motion.div for the backdrop and drawer */}
      {isDrawerOpen && (
        <>
          <motion.div
            className="fixed top-0 left-0 h-full w-full bg-black opacity-50 z-0"
            onClick={() => setIsDrawerOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="fixed flex justify-between top-0 pt-10 left-0 h-full w-[70%] bg-white z-20"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <div>
              <div className="ms-6">
                <img src={logo} alt="Tshirts" width={150} />
                <div className="mt-8 space-y-8 font-semibold">
                  <p>Custom Apparel</p>
                  <p>Collections</p>
                  <p>Apparel</p>
                  <p>Gifts</p>
                </div>
              </div>
            </div>
            <div className="me-10">
              <button onClick={() => setIsDrawerOpen(false)}>
                <IoMdClose size={28} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </header>
  );
};

export default Navbar;