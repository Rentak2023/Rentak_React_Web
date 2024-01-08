import startApplication from "@mongez/react";
import "./shared/apps-list";
import "./shared/config";

import ReactGA from "react-ga";

const TRACKING_ID = "G-E74R60FVCB";
ReactGA.initialize(TRACKING_ID);

startApplication();
