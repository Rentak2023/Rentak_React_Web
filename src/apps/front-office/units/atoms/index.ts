import { atom } from "@mongez/react-atom";

export const propertiesAtom = atom({
  key: "properties",
  default: {
    properties: [],
  }
});

export const currentPageAtom = atom({
  key: "currentPage",
  default: {
    currentPage: 1
  }
});

export const paramsAtom = atom({
  key: "searchParams",
  default: {
    params: {}
  }
});

export const totalPagesAtom = atom({
  key: "totalPages",
  default: {
    pages: {}
  }
});