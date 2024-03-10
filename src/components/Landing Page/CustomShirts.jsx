import Button from "../ui-components/Button";

const CustomShirts = () => {
  return (
    <div className="w-[90%] mt-12 customShirts rounded-xl font-inter flex-col gap-4 text-white flex justify-center items-center h-[50vh]  max-lg:h-[70vh] max-md:w-[95%] mx-auto">
      <h2 className=" font-semibold font-heading text-4xl">
        Print Custom T-shirts
      </h2>
      <p className="font-inter w-[50%] max-lg:w-[90%] text-center">
        Express yourself with your own Custom T-shirt Design. We make it easy to
        create and order with our Custom Design Tool.
      </p>
      <Button className="text-black bg-white hover:text-black max-md:w-[90%]">
        Shop Now
      </Button>
    </div>
  );
};

export default CustomShirts;
