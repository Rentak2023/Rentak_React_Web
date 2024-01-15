import { SvgsTypes } from "./types";

const LocationIcon = ({ size, color }: SvgsTypes) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="26"
        viewBox="0 0 24 26"
        fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.7671 24.1409C16.6384 21.8183 22 16.6747 22 10.6484C22 5.19409 17.5229 0.772461 12 0.772461C6.47716 0.772461 2 5.19409 2 10.6484C2 16.6747 7.36152 21.8183 10.2329 24.1409C11.274 24.983 12.726 24.983 13.7671 24.1409Z"
          stroke="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 13.7725C14.2092 13.7725 16 11.9817 16 9.77246C16 7.56333 14.2092 5.77246 12 5.77246C9.7908 5.77246 8 7.56333 8 9.77246C8 11.9817 9.7908 13.7725 12 13.7725Z"
          stroke="black"
        />
      </svg>
    </>
  );
};

export default LocationIcon;
