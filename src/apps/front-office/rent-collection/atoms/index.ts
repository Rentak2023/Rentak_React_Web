import { atom } from "@mongez/react-atom";

export const rentCollectionAtom = atom({
  key: "rentCollection",
  default: {
    username: '',
  }
});

export const rentCollectionFeesAtom = atom({
  key: "rentCollectionFees",
  default: {
    fees: 0,
  }
})