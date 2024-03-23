import { setCurrentLocaleCode } from "@mongez/localization"
import { current } from "@mongez/react"
import { changeLocaleCode, navigateTo } from "@mongez/react-router"
import URLS from "../utils/urls";

export const arabicMiddleware = () => {
  if(current('localeCode') === "en"){
    changeLocaleCode('ar', 'soft');
   return null;
  }
}