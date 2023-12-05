import { css, Global } from "@emotion/react";
import "swiper/css";
import { isRTL } from "apps/front-office/utils/helpers";
import { theme } from "./theme";
import devices from "./devices";
export default function GlobalStyles() {
  const { fontFamily } = theme;

  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap");
        #root {
          overflow: hidden;
        }
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        ul {
          list-style: none;
        }
        a {
          text-decoration: none;
          color: inherit;
          &:hover {
            text-decoration: none;
          }
        }
        img {
          display: block;
          max-width: 100%;
        }
        body {
          font-family: ${isRTL()
            ? fontFamily.ar.primary
            : fontFamily.en.primary};
          width: 100%;
          white-space: normal;
        }

        .list-unstyled {
          list-style: none;
          padding: 0;
        }
        .mantine-Drawer-root {
          z-index: 999;
        }

        ::-webkit-scrollbar {
          width: 5px;
          height: 5px;
          background-color: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background-color: ${theme.colors.primaryColor};
          border-radius: 5px;
        }
        // Dropdown

        // Swipper Slider
        .swiper {
          position: relative;
          .swiper-pagination {
            position: relative;
            top: 0;
            margin-top: 15px;
          }

          .swiper-pagination-bullet {
            background: #80b3e6;
            height: 13px;
            width: 13px;
            &.swiper-pagination-bullet-active {
              background-color: ${theme.colors.secondary[600]};
            }
          }

          .swiper-scrollbar-drag {
            background: ${theme.colors.primaryColor};
          }

          .swiper-scrollbar {
            background: #feebe4;
            margin-top: 10px;
            position: initial !important;
            top: 0;
          }
          .custom--prev,
          .custom--next {
            filter: drop-shadow(0px 0px 7px rgba(135, 135, 135, 0.25));
            position: absolute;
            top: calc(50% - 15px);
            transform: translateY(calc(-50%));
            z-index: 99;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60px;
            height: 60px;
            background: white;
            border-radius: 50%;
            cursor: pointer;
            ${devices.smallMax} {
              right: 0;
              width: 35px;
              height: 35px;
              svg {
                width: 12px;
                height: 14px;
              }
            }
          }

          .custom--prev {
            left: 40px;
            ${devices.smallMax} {
              left: 0;
            }
          }

          .custom--next {
            right: 40px;
            ${devices.smallMax} {
              right: 0;
            }
          }
        }
        // Model CSS
      `}
    />
  );
}
