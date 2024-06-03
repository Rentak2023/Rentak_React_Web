import { atom } from "@mongez/react-atom";

export const rentPaymentAtom = atom({
  key: "rentPayment",
  default: {
    username: '',
  }
});

export const rentPaymentFeesAtom = atom({
  key: "rentPaymentFees",
  default: {
    fees: 0,
  }
});