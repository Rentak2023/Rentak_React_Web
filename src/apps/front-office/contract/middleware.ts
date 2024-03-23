import { getCurrentLocaleCode } from "@mongez/localization"
import { current } from "@mongez/react"
import { changeLocaleCode, navigateTo } from "@mongez/react-router"

export const arabicMiddleware = () => {
  const currentPath = window.location.pathname;
  const isNotArOrEn = !currentPath.includes("ar") && !currentPath.includes("en");

  if(isNotArOrEn){
    changeLocaleCode('ar', 'soft');
   return null;
  }
}