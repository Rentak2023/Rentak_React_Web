import endpoint from "shared/endpoint";

export function contactUs(formData) {
  return endpoint.post('/contact-us/create', formData);
}
