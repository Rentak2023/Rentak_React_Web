import { googleFont } from "@mongez/dom";
import { current } from "@mongez/react";

export * from "./utils/theme";

if (current("localeCode") === "ar") {
  // load Cairo font from google
  googleFont(
    "https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap",
  );
}
