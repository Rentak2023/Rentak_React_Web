import { SvgsTypes } from "./types";

const HowItWorksIcon = ({ type, size, color }: SvgsTypes) => {
  switch (type) {
    case 1:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="211"
          height="11"
          viewBox="0 0 211 11"
          fill="none">
          <path
            opacity="0.2"
            d="M9.5 5.5H201"
            stroke="url(#paint0_linear_421_4312)"
            stroke-width="3"
            stroke-dasharray="5 10"
          />
          <circle cx="205" cy="5.5" r="5.5" fill="#008BF3" />
          <circle cx="6" cy="5.5" r="5.5" fill="#0066CC" />
          <defs>
            <linearGradient
              id="paint0_linear_421_4312"
              x1="14.5"
              y1="6.99944"
              x2="206"
              y2="7.49958"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#9672FF" />
              <stop offset="1" stop-color="#4DDFFD" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 2:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="211"
          height="11"
          viewBox="0 0 211 11"
          fill="none">
          <path
            opacity="0.2"
            d="M201.5 5.5H10"
            stroke="url(#paint0_linear_421_4322)"
            stroke-width="3"
            stroke-dasharray="5 10"
          />
          <circle
            cx="5.5"
            cy="5.5"
            r="5.5"
            transform="matrix(-1 0 0 1 11.5 0)"
            fill="#008BF3"
          />
          <circle
            cx="5.5"
            cy="5.5"
            r="5.5"
            transform="matrix(-1 0 0 1 210.5 0)"
            fill="#DD88EB"
          />
          <defs>
            <linearGradient
              id="paint0_linear_421_4322"
              x1="196.5"
              y1="6.99944"
              x2="4.99999"
              y2="7.49958"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#9672FF" />
              <stop offset="1" stop-color="#4DDFFD" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 3:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="211"
          height="11"
          viewBox="0 0 211 11"
          fill="none">
          <path
            opacity="0.2"
            d="M201.5 5.5H10"
            stroke="url(#paint0_linear_421_4332)"
            stroke-width="3"
            stroke-dasharray="5 10"
          />
          <circle
            cx="5.5"
            cy="5.5"
            r="5.5"
            transform="matrix(-1 0 0 1 11.5 0)"
            fill="#DD88EB"
          />
          <circle
            cx="5.5"
            cy="5.5"
            r="5.5"
            transform="matrix(-1 0 0 1 210.5 0)"
            fill="#FFCC00"
          />
          <defs>
            <linearGradient
              id="paint0_linear_421_4332"
              x1="196.5"
              y1="6.99944"
              x2="4.99999"
              y2="7.49958"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#9672FF" />
              <stop offset="1" stop-color="#4DDFFD" />
            </linearGradient>
          </defs>
        </svg>
      );
  }
};

export default HowItWorksIcon;
