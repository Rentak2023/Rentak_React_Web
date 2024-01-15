import { current } from "@mongez/react";
import endpoint from "shared/endpoint";

export function getAllProperties(params) {
  return endpoint.get(`/unit/get-all-units?lang=${current("localeCode")}`, {params});
}

export function getFinishingTypes() {
  return endpoint.get(`/unit/get-all-finish-types?lang=${current("localeCode")}`);
}

export function getPropertyTypes() {
  return endpoint.get(`/unit/get-all-property-types?lang=${current("localeCode")}`);
}

export function getCities() {
  return endpoint.get(`/location/get-all-cities`);
}

export function getDistricts() {
  return endpoint.get(`/location/get-all-governorates`);
}

