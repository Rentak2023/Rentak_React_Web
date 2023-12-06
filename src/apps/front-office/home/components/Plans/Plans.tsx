import useBreakpoints from "apps/front-office/common/hooks/useBreakpoints";
import DesktopPlans from "./DesktopPlans";
import MobilePlans from "./MobilePlans";

export default function Plans() {
  const { large } = useBreakpoints();

  return <>{large ? <DesktopPlans /> : <MobilePlans />}</>;
}
