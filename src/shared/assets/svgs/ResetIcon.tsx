import { SvgsTypes } from "./types";

const ResetIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none">
        <path
          d="M6.81543 12.3551C9.4538 7.81458 14.3704 4.76172 20.0001 4.76172C28.4158 4.76172 35.2382 11.584 35.2382 19.9998C35.2382 28.4156 28.4158 35.2379 20.0001 35.2379C11.5843 35.2379 4.76196 28.4156 4.76196 19.9998"
          stroke="#001A33"
          stroke-width="1.90476"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.2858 12.3808H6.66672V4.76172"
          stroke="#001A33"
          stroke-width="1.90476"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default ResetIcon;
