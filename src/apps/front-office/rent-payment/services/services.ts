import endpoint from "shared/endpoint";

export function sendOtp(formData) {
  return endpoint.post("/auth/send_otp", formData);
}

export function verifyOtp(formData) {
  return endpoint.post("/auth/confirm-otp", formData);
}

export function getPaymentMethodsIn() {
  return endpoint.get("/payment-method/get_all_cash_in_payment_methods");
}

export function getPaymentMethodsOut() {
  return endpoint.get("/payment-method/get_all_cash_out_payment_methods");
}

export function getProducts() {
  return endpoint.get("/api/Product/get-all-products");
}

export function sendPromoCode(formData) {
  return endpoint.post("/promocode/check-promocode", formData);
}

export function getBanks() {
  return endpoint.get("/bank/get-all-banks");
}

export function sendRentPayment(formData){
  return endpoint.post("/contract/create_rent_payment_contract", formData);
}