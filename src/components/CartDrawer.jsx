import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const CartDrawer = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <>
        <motion.div
          className="fixed top-0 right-0 h-full w-full bg-black opacity-50 z-0"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="fixed flex justify-between top-0 pt-10 right-0 h-full w-[40%] bg-white z-20"
          initial={{ x: "+100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <div className="w-full">
            <div className=" ms-4 space-y-6 w-full">
              <p className="ms-4 text-4xl font-heading font-semibold">Cart</p>
              <p className="ms-4 font-inter ">Your cart is currently empty</p>
              <button className="w-full border border-gray-100 ms-4 p-3 rounded-sm font-semibold">
                Continue Shopping
              </button>
            </div>
          </div>
          <div className="me-10">
            <button onClick={onClose}>
              <IoMdClose size={28} />
            </button>
          </div>
        </motion.div>
      </>
    )
  );
};

export default CartDrawer;
