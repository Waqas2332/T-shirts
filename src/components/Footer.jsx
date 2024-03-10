import { FaFacebook, FaInstagram, FaPinterest, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

import logo from "../assets/tshirts-footer-logo.svg";
import FooterIcons from "./FooterIcons";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-white font-inter bg-[#111827]">
      <div className="container w-[90%] px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-72 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <div className="flex title-font font-medium items-center md:justify-start justify-center   ">
            <img src={logo} alt="" />
          </div>
          <p className="mt-6 font-inter text-[16px]">
            From unique finds to your own designs, discover a world of T-shirts
            for every personality.
          </p>
          <div className="flex gap-4 mt-6 items-center md:justify-start justify-center">
            <Link to="">
              <FaXTwitter color="#A7A7A7" size={24} />
            </Link>
            <Link to="">
              <FaFacebook color="#A7A7A7" size={24} />
            </Link>
            <Link to="">
              <FaInstagram color="#A7A7A7" size={24} />
            </Link>
            <Link to="">
              <FaPinterest color="#A7A7A7" size={24} />
            </Link>
            <Link to="">
              <FaTiktok color="#A7A7A7" size={24} />
            </Link>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium    tracking-widest text-sm mb-3">
              Quick Links
            </h2>
            <nav className="list-none mb-10 space-y-4 font-semibold">
              <li>
                <a className="">All Designs</a>
              </li>
              <li>
                <a className="">Featured Designs</a>
              </li>
              <li>
                <a className="">Gift Card</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium    tracking-widest text-sm mb-3">
              About Us
            </h2>
            <nav className="list-none mb-10 space-y-4 font-semibold">
              <li>
                <a className="">About Us</a>
              </li>
              <li>
                <a className="">Wholesale</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium    tracking-widest text-sm mb-3">
              Support
            </h2>
            <nav className="list-none mb-10 space-y-4 font-semibold">
              <li>
                <a className="">Contact Us</a>
              </li>
              <li>
                <a className="">FAQ</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3">
              Legal
            </h2>
            <nav className="list-none mb-10 space-y-4 font-semibold">
              <li>
                <a className="">Terms & Conditions</a>
              </li>
              <li>
                <a className="">Privacy Policy</a>
              </li>
              <li>
                <a className="">Return Policy</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto pb-8 flex justify-between max-md:flex-col max-md:items-center max-md:gap-4">
        <div className="flex flex-wrap flex-col sm:flex-row ">
          <p className="text-center text-[#A7A7A7] sm:text-left">
            © {year} Tshirts.com. All rights reserved.
          </p>
        </div>
        <div className="flex gap-2 ">
          <FooterIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
