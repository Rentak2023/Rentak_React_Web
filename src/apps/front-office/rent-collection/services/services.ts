import endpoint from "shared/endpoint";

export function sendRentCollection(formData) {
  return endpoint.post("/public/create-contract", formData);
}
export function getPaymentMethodsOut() {
  return endpoint.get("/payment-method/get_all_cash_out_payment_methods");
}

export function getBanks() {
  return endpoint.get("/bank/get-all-banks");
}

export function getProducts() {
  return endpoint.get("/api/Product/get-all-products");
}