import { SvgsTypes } from "./types";

const FacebookIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <svg
        width={size ?? "11"}
        height={size ?? "19"}
        viewBox="0 0 11 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.68359 10.2695H7.04688V18.1445H3.53125V10.2695H0.648438V7.03516H3.53125V4.53906C3.53125 1.72656 5.21875 0.144531 7.78516 0.144531C9.01562 0.144531 10.3164 0.390625 10.3164 0.390625V3.16797H8.875C7.46875 3.16797 7.04688 4.01172 7.04688 4.92578V7.03516H10.1758L9.68359 10.2695Z"
          fill={color ?? "#292F36"}
        />
      </svg>
    </>
  );
};

export default FacebookIcon;
