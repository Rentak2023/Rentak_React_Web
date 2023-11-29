import useBreakpoints from "apps/front-office/common/hooks/useBreakpoints";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const { medium } = useBreakpoints();

  return <>{medium ? <DesktopHeader /> : <MobileHeader />}</>;
}
