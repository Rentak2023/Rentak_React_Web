import React from "react";
import { publicRoutes } from "../utils/router";
import URLS from "../utils/urls";

publicRoutes([
  // login routes
  {
    path: URLS.auth.login,
    component: React.lazy(() => import("./components/LoginAndRegister")),
  },
  {
    path: URLS.auth.forgetPassword,
    component: React.lazy(() => import("./components/ForgetPassword")),
  },
  {
    path: URLS.auth.verifyForgetPassword,
    component: React.lazy(() => import("./components/Verify")),
  },
  {
    path: URLS.auth.resetPassword,
    component: React.lazy(() => import("./components/ResetPassword")),
  },
]);
