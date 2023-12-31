import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import React from "react";

publicRoutes([
  {
    path: URLS.rentCollection,
    component: React.lazy(() => import("./components/RentCollection")),
  },
]);
