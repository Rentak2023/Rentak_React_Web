import endpoint from "shared/endpoint";

export function getProperties() {
  return endpoint.get('/home/get-home-units');
}