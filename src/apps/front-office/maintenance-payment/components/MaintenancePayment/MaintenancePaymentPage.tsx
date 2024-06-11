import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import Card from "apps/front-office/design-system/components/Card";
import PageHeader from "apps/front-office/design-system/components/PageHeader";
import MaintenancePaymentContent from "./MaintenancePaymentContent";
import { FormIcon } from "shared/assets/svgs";
import FloatingButtons from "apps/front-office/design-system/components/FloatingButtons";

function MaintenancePaymentPage() {
  return (
    <>
      <Helmet title={trans("maintenancePayment")} />
      <>
        <PageHeader
          title="maintenancePayment"
          subTitle="rentNow"
          icon={<FormIcon />}
        />
        <Card title="fillForm" subtitle="completeForm">
          <MaintenancePaymentContent />
          <FloatingButtons />
        </Card>
      </>
    </>
  );
}

export default MaintenancePaymentPage;
