import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import Card from "apps/front-office/design-system/components/Card";
import PageHeader from "apps/front-office/design-system/components/PageHeader";
import RentCollectionContent from "./RentCollectionContent";
import { FormIcon } from "shared/assets/svgs";

function RentCollectionPage() {
  return (
    <>
      <Helmet title={trans("rentCollection")} />
      <>
        <PageHeader
          title="rentCollection"
          subTitle="rentCollectionSubTitle"
          description="rentCollectionDescription"
          icon={<FormIcon />}
        />
        <Card
          title="fillForm"
          subtitle="completeForm"
        >
          <RentCollectionContent />
        </Card>
      </>
    </>
  );
}

export default RentCollectionPage;
