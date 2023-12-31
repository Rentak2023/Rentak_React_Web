import endpoint from "shared/endpoint";

export function sendContract(formData) {
  return endpoint.post("/public/create-contract", formData);
}
