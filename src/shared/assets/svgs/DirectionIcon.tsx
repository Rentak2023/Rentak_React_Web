import { isRTL } from "apps/front-office/utils/helpers";
import { SvgsTypes } from "./types";

const DirectionIcon = ({ type, color }: SvgsTypes) => {
  switch (type) {
    case "right":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="31"
          viewBox="0 0 30 31"
          style={{transform: isRTL() ? "rotate(180deg)" : "none"}}
          fill="none">
          <path
            d="M15.7148 11.1348L19.6875 15.1074L15.7148 19.0801"
            stroke={color ?? "black"}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.3125 15.1077H19.6875"
            stroke={color ?? "black"}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "left":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="31"
          viewBox="0 0 30 31"
          style={{transform: isRTL() ? "rotate(180deg)" : "none"}}
          fill="none">
          <path
            d="M14.2852 11.4219L10.3125 15.3945L14.2852 19.3672"
            stroke={color ?? "black"}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.6875 15.3945H10.3125"
            stroke={color ?? "black"}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
  }
};

export default DirectionIcon;
