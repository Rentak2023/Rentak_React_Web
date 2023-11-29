import { css, Global } from "@emotion/react";
import Fonts from "assets/fonts";

const fontFaceGenerator = (
  name: string,
  woff: string,
  woff2: string,
  weight: string | number
) => {
  return css`
    @font-face {
      font-family: ${name};
      src: url(${woff2}) format("woff2"), url(${woff}) format("woff");
      font-weight: ${weight};
    }
  `;
};

export default function FontSetup() {
  return (
    <Global
      styles={css`
        ${Fonts.map((font) =>
          font.weights.map((fontWeight) =>
            fontFaceGenerator(
              font.name,
              fontWeight.woff,
              fontWeight.woff2,
              fontWeight.weight
            )
          )
        )}
      `}
    />
  );
}
