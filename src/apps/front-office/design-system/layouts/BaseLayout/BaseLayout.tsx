import { BasicComponentProps } from "@mongez/moonlight";
import Footer from "../Footer";
import Header from "../Header";
import FontSetup from "../../utils/FontSetup";
import GlobalStyles from "../../utils/GlobalStyles";

/**
 * Base layout can be used to wrap all pages
 */
export default function BaseLayout({ children }: BasicComponentProps) {
  return (
    <>
      <Header />
      <FontSetup />
      <GlobalStyles />
      <main>{children}</main>
      <Footer />
    </>
  );
}
