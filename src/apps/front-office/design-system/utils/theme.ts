import { currentLocaleCode } from "@mongez/moonlight";
import colors from "./colors";
import typography from "./typography";

export const theme = {
  colors,
  fontFamily: {
    ar: {
      primary: 'Noto Sans Arabic',
    },
    en: {
      primary: 'general sans',
    },
  },
  typography,
};

export function getPrimaryFont() {
  return theme.fontFamily[currentLocaleCode()].primary;
}
