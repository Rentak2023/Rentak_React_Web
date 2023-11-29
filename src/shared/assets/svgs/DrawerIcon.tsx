import { SvgsTypes } from "./types";

const DrawerIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <svg
        width={size ?? "29"}
        height="16"
        viewBox="0 0 29 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="nav-icon-white.svg">
          <path
            id="Vector"
            d="M27 0H2.20001C1.09544 0 0.200012 0.895431 0.200012 2C0.200012 3.10457 1.09544 4 2.20001 4H27C28.1046 4 29 3.10457 29 2C29 0.895431 28.1046 0 27 0Z"
            fill={color ?? "#001A33"}
          />
          <path
            id="Vector_2"
            d="M27 11.7334H7C5.89543 11.7334 5 12.6288 5 13.7334C5 14.838 5.89543 15.7334 7 15.7334H27C28.1046 15.7334 29 14.838 29 13.7334C29 12.6288 28.1046 11.7334 27 11.7334Z"
            fill={color ?? "#001A33"}
          />
        </g>
      </svg>
    </>
  );
};

export default DrawerIcon;
