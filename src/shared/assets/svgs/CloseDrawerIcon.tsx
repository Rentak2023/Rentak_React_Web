import { isRTL } from "apps/front-office/utils/helpers";
import { SvgsTypes } from "./types";

const CloseDrawerIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="40"
        viewBox="0 0 41 40"
        style={{ transform: isRTL() ? "rotate(180deg)" : "none" }}
        fill="none">
        <g filter="url(#filter0_b_528_1581)">
          <rect
            width="39.96"
            height="39.96"
            rx="19.98"
            transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 40.22 40)"
            fill="#001A33"
            fill-opacity="0.2"
          />
          <path
            opacity="0.8"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.4827 20.0213L15.9939 12.4694C15.4396 11.9098 15.4396 11.0072 15.9939 10.4475C16.258 10.1801 16.6183 10.0298 16.994 10.0298C17.3697 10.0298 17.73 10.1801 17.9941 10.4475L26.4831 19.0088C27.0391 19.5678 27.0391 20.4717 26.4831 21.0307L17.9945 29.592C17.73 29.8594 17.3697 30.0098 16.994 30.0098C16.6183 30.0098 16.258 29.8594 15.9935 29.592C15.4396 29.0323 15.4396 28.1297 15.9942 27.5701L23.4827 20.0213Z"
            fill="#001A33"
            fill-opacity="0.48"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_528_1581"
            x="-299.44"
            y="-299.66"
            width="639.36"
            height="639.36"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="149.85" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_528_1581"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_528_1581"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default CloseDrawerIcon;
