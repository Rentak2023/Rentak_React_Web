import { atom } from "@mongez/react-atom";

export const propertiesAtom = atom({
  key: "properties",
  default: {
    properties: []
  }
})