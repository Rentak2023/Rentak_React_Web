import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import Card from "apps/front-office/design-system/components/Card";
import PageHeader from "apps/front-office/design-system/components/PageHeader";
import RentPaymentContent from "./RentPaymentContent";
import { FormIcon } from "shared/assets/svgs";
import FloatingButtons from "apps/front-office/design-system/components/FloatingButtons";

function RentPaymentPage() {
  return (
    <>
      <Helmet title={trans("rentPayment")} />
      <>
        <PageHeader
          title="rentPayment"
          subTitle="rentNow"
          description="rentPaymentDescription"
          icon={<FormIcon />}
        />
        <Card title="fillForm" subtitle="completeRentPaymentForm">
          <RentPaymentContent />
          <FloatingButtons />
        </Card>
      </>
    </>
  );
}

export default RentPaymentPage;
