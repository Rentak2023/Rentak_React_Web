import { FontFaceType } from "../types";
import BOLD_WOFF from "./bold/bold.woff";
import BOLD_WOFF2 from "./bold/bold.woff2";
import LIGHT_WOFF from "./light/light.woff";
import LIGHT_WOFF2 from "./light/light.woff2";
import REGULAR_WOFF from "./regular/regular.woff";
import REGULAR_WOFF2 from "./regular/regular.woff2";

import MEDIUM_WOFF from "./medium/medium.woff";
import MEDIUM_WOFF2 from "./medium/medium.woff2";

const GeneralSansFont: FontFaceType = {
  name: "General Sans",
  weights: [
    {
      weightName: "light",
      woff: LIGHT_WOFF,
      woff2: LIGHT_WOFF2,
      weight: "100",
    },
    {
      weightName: "regular",
      woff: REGULAR_WOFF,
      woff2: REGULAR_WOFF2,
      weight: "300",
    },
    {
      weightName: "medium",
      woff: MEDIUM_WOFF,
      woff2: MEDIUM_WOFF2,
      weight: "700",
    },
    {
      weightName: "bold",
      woff: BOLD_WOFF,
      woff2: BOLD_WOFF2,
      weight: "800",
    },
    
  ],
};

export default GeneralSansFont;
