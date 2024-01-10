import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import Card from "apps/front-office/design-system/components/Card";
import PageHeader from "apps/front-office/design-system/components/PageHeader";
import { UnitsIcon } from "shared/assets/svgs";
import SearchForm from "../SearchForm";

function UnitsPage() {
  return (
    <>
      <Helmet title={trans("rentCollection")} />
      <>
        <PageHeader
          title="rentCollection"
          subTitle="rentNow"
          icon={<UnitsIcon />}
        />
        <SearchForm />
      </>
    </>
  );
}

export default UnitsPage;
