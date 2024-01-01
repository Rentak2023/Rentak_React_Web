import { atom } from "@mongez/react-atom";

export const rentCollectionAtom = atom({
  key: "rentCollection",
  default: {
    username: '',
  }
})