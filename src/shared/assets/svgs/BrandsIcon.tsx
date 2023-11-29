import { SvgsTypes } from "./types";
import BrandOne from "../images/brand-1.jpeg";
import BrandTwo from "../images/brand-2.jpeg";
import BrandThree from "../images/brand-3.jpeg";
import BrandFour from "../images/brand-4.jpeg";
import BrandFive from "../images/brand-5.jpeg";
import BrandSix from "../images/brand-6.jpeg";
import BrandSeven from "../images/brand-7.jpeg";

const BrandsIcon = ({ type, size, color }: SvgsTypes) => {
  switch (type) {
    case 1:
      return <img src={BrandOne} />;
    case 2:
      return <img src={BrandTwo} />;
    case 3:
      return <img src={BrandThree} />;
    case 4:
      return <img src={BrandFour} />;
    case 5:
      return <img src={BrandFive} />;
    case 6:
      return <img src={BrandSix} />;
    case 7:
      return <img src={BrandSeven} />;
  }
};

export default BrandsIcon;
