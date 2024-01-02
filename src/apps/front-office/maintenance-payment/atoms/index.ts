import { atom } from "@mongez/react-atom";

export const rentPaymentAtom = atom({
  key: "rentPayment",
  default: {
    username: '',
  }
})