import endpoint from "shared/endpoint";

export function sendRentCollection(formData) {
  return endpoint.post("/public/create-contract", formData);
}
