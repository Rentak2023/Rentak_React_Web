import { atom } from "@mongez/react-atom";

export const headerAtom = atom({
  key: "header",
  default: {
    mode: "default",
  },
});
