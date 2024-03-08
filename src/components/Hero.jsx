const Hero = () => {
  return (
    <section className="hero-bg flex items-center mt-8">
      <div className="max-md:w-[90%] w-[650px] ms-[5%] space-y-4">
        <h1 className="text-5xl font-heading">Find Your Perfect T-Shirts</h1>
        <p className="font-inter text-xl text-buttonBg">
          Discover t-shirts for lots occasions or design your own for a truly
          personalized touch. Check out our St. Patrick&apos;s Day collection.
        </p>
        <button className=" p-3 text-white bg-buttonBg lg:px-5 px-2 font-semibold text-base outline-none rounded-lg hover:text-gray-100">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
