import { atom } from "@mongez/react-atom";

export const maintenancePaymentAtom = atom({
  key: "maintenancePayment",
  default: {
    username: '',
  }
});

export const maintenancePaymentFeesAtom = atom({
  key: "maintenancePaymentFees",
  default: {
    fees: 0,
  }
})