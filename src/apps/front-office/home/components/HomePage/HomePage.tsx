import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { mainTranslation } from "apps/front-office/utils/locales";
import MainSlider from "../MainSlider";
import BookingStrip from "../BookingStrip/BookingStrip";
import Services from "../Services";
import WhyRentak from "../WhyRentak";
import Plans from "../Plans";
import HowItWorks from "../HowItWorks";
import TenantsHub from "../TenantsHub";
import Brands from "../Brands";
import Comments from "../Comments";
import Properties from "../Properties";
import ContactUs from "apps/front-office/design-system/components/ContactUs";

export default function HomePage() {
  return (
    <>
      <Helmet title={trans('rentakApp')} appendAppName={false} />

      <MainSlider />
      {/* <BookingStrip /> */}
      <Services />
      <WhyRentak />
      <Plans />
      <HowItWorks />
      <TenantsHub />
      <Properties />
      <Brands />
      <Comments />
      <ContactUs />
    </>
  );
}
