import { current } from "@mongez/react";
import endpoint from "shared/endpoint";

export function getProperty(params) {
  return endpoint.get(`/unit/get-unit-details?lang=${current("localeCode")}`, {params});
}

export function visit(formData) {
  return endpoint.post(`/unit/visit`, formData);
}

export function getInspection(id) {
  return endpoint.get(`https://rentak-api.azurewebsites.net//unit/get-unit-inspection?id=${id}`);
}

