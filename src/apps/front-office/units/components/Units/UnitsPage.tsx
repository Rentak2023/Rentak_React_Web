import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import Card from "apps/front-office/design-system/components/Card";
import PageHeader from "apps/front-office/design-system/components/PageHeader";
import { UnitsIcon } from "shared/assets/svgs";
import SearchForm from "../SearchForm";
import Properties from "../Properties";
import Testimonials from "../Testimonials";

function UnitsPage() {
  return (
    <>
      <Helmet title={trans("rentCollection")} />
      <>
        <PageHeader
          title="unitsRenting"
          subTitle="rentNow"
          icon={<UnitsIcon />}
        />
        <SearchForm />
        <Properties />
        <Testimonials />
      </>
    </>
  );
}

export default UnitsPage;
