import Cards from "../components/Landing Page/Cards";
import CustomShirts from "../components/Landing Page/CustomShirts";
import FeaturedProducts from "../components/Landing Page/FeaturedProducts";
import Hero from "../components/Landing Page/Hero";
import HeroCards from "../components/Landing Page/HeroCards";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroCards />
      <FeaturedProducts />
      <CustomShirts />
      <Cards />
    </>
  );
};

export default Home;
