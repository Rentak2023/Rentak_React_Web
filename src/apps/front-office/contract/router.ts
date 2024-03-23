import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import React from "react";
import { arabicMiddleware } from "./middleware";
import router, { Route } from "@mongez/react-router";
import BaseLayout from "../design-system/layouts/BaseLayout";

export function arabicRoutes(routes: Route[]) {
  return router.group({
    layout: BaseLayout,
    middleware: [arabicMiddleware],
    routes,
  });
}
arabicRoutes([
  {
    path: URLS.contract,
    component: React.lazy(() => import("./components/ContractPage")),
  },
]);
