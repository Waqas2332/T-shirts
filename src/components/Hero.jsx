import Button from "./ui-components/Button";

const Hero = () => {
  return (
    <section className="hero-bg flex items-center mt-8 mb-20 max-md:mt-32">
      <div className="max-md:w-[90%] w-[650px] ms-[5%] space-y-4 max-md:text-center">
        <h1 className="text-5xl font-heading font-medium">
          Find Your Perfect T-Shirts
        </h1>
        <p className="font-inter text-xl text-buttonBg">
          Discover t-shirts for lots occasions or design your own for a truly
          personalized touch. Check out our St. Patrick&apos;s Day collection.
        </p>
        <Button>Shop Now</Button>
      </div>
    </section>
  );
};

export default Hero;
