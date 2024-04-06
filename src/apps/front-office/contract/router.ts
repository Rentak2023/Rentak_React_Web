import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import React from "react";
import { arabicMiddleware } from "./middleware";

publicRoutes([
  {
    path: URLS.contract,
    component: React.lazy(() => import("./components/ContractPage")),
    middleware: [arabicMiddleware],
  },
]);
