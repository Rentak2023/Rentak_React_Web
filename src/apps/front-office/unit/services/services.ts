import { current } from "@mongez/react";
import endpoint from "shared/endpoint";

export function getProperty(params) {
  return endpoint.get(`/unit/get-unit-details?lang=${current("localeCode")}`, {params});
}

