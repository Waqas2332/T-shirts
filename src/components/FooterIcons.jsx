import footer1 from "../assets/footer-images/footer-1.svg";
import footer2 from "../assets/footer-images/footer-2.svg";
import footer3 from "../assets/footer-images/footer-3.svg";
import footer4 from "../assets/footer-images/footer-4.svg";
import footer5 from "../assets/footer-images/footer-5.svg";
import footer6 from "../assets/footer-images/footer-6.svg";
import footer7 from "../assets/footer-images/footer-7.svg";
import footer8 from "../assets/footer-images/footer-8.svg";
import footer9 from "../assets/footer-images/footer-9.svg";
import footer10 from "../assets/footer-images/footer-10.svg";

const FooterIcons = () => {
  const images = [
    footer1,
    footer2,
    footer3,
    footer4,
    footer5,
    footer6,
    footer7,
    footer8,
    footer9,
    footer10,
  ];

  return images.map((image, index) => (
    <img src={image} alt="icons" key={index} />
  ));
};

export default FooterIcons;
