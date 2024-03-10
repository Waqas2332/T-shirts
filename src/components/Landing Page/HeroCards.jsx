import { Link } from "react-router-dom";
import heroCard1 from "../../assets/hero-card-1.jpeg";
import heroCard2 from "../../assets/hero-card-2.jpeg";
import heroCard3 from "../../assets/hero-card-3.jpeg";
import { motion } from "framer-motion";

const HeroCards = () => {
  return (
    <section>
      <div className="flex gap-4 w-[90%] mx-auto justify-between max-lg:flex-col">
        <Card imageUrl={heroCard1} title="St. Patrcik's Day" redirect="/" />
        <Card imageUrl={heroCard2} title="Workout" redirect="/" />
        <Card imageUrl={heroCard3} title="Cities" redirect="/" />
      </div>
    </section>
  );
};

export default HeroCards;

const Card = ({ imageUrl, title, redirect }) => {
  return (
    <Link to={redirect}>
      <div className=" shadow-md hover:shadow-lg rounded-2xl cursor-pointer">
        <div
          className="h-[350px] w-[350px] max-[1160px]:w-[300px] max-lg:w-[100%] max-lg:[200px]  relative rounded-2xl  bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="p-4 absolute bottom-3">
            <h2 className="font-bold  font-heading text-white text-3xl">
              {title}
            </h2>
            <p className="text-white font-inter font-medium mt-2">Shop Now</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
