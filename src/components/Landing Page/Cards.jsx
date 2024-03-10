import { BsTruck } from "react-icons/bs";
import { LuSendToBack } from "react-icons/lu";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { TiArrowMaximise } from "react-icons/ti";

const Cards = () => {
  return (
    <section className="w-[90%] mx-auto mt-20">
      <div className="flex items-stretch gap-4 lg:gap-8 overflow-x-auto overflow-y-hidden h-full max-md:flex-col">
        <div className="flex flex-col gap-4 bg-gray-100 w-full h-[300px] max-md:h-full w-min-208px rounded-xl p-5 lg:p-6">
          <div className="w-12 flex justify-center items-center text-white rounded-lg h-12 bg-[#30C0CB]">
            <BsTruck size={28} />
          </div>
          <h2 className="font-inter text-lg lg:text-xl font-semibold text-gray-900">
            Printed in the USA
          </h2>
          <p className="font-inter text-base font-normal text-gray-600">
            We believe in putting the &lsquo;you&rsquo; in USA, one tee at a
            time!
          </p>
        </div>
        <div className="flex flex-col gap-4 bg-gray-100 w-full h-[300px] max-md:h-full w-min-208px rounded-xl p-5 lg:p-6">
          <div className="w-12 flex justify-center items-center text-white rounded-lg h-12 bg-[#30C0CB]">
            <LuSendToBack size={28} />
          </div>
          <h2 className="font-inter text-lg lg:text-xl font-semibold text-gray-900">
            Satisfaction Guaranteed
          </h2>
          <p className="font-inter text-base font-normal text-gray-600">
            If your purchase isn&apos;t a perfect fit, don&apos;t fret - we
            ensure joyous returns within 14 days
          </p>
        </div>
        <div className="flex flex-col gap-4 bg-gray-100 w-full h-[300px] max-md:h-full w-min-208px rounded-xl p-5 lg:p-6">
          <div className="w-12 flex justify-center items-center text-white rounded-lg h-12 bg-[#30C0CB]">
            <TiArrowMaximise size={28} />
          </div>
          <h2 className="font-inter text-lg lg:text-xl font-semibold text-gray-900">
            Comfortable Cotton Fabric
          </h2>
          <p className="font-inter text-base font-normal text-gray-600">
            We believe every tee should feel as soft as a friendly hug!
          </p>
        </div>
        <div className="flex flex-col gap-4 bg-gray-100 w-full h-[300px] max-md:h-full w-min-208px rounded-xl p-5 lg:p-6">
          <div className="w-12 flex justify-center items-center text-white rounded-lg h-12 bg-[#30C0CB]">
            <TfiCommentsSmiley size={28} />
          </div>
          <h2 className="font-inter text-lg lg:text-xl font-semibold text-gray-900">
            Thousands of designs
          </h2>
          <p className="font-inter text-base font-normal text-gray-600">
            We stand by the idea that your wardrobe should be as diverse and
            unique as you are!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cards;
