import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import RentPaymentContent from "./RentPaymentContent";
import FloatingButtons from "apps/front-office/design-system/components/FloatingButtons";
import PageHeader from "./PageHeader";
import Card from "./Card";
import { useEffect } from "react";
import { headerAtom } from "apps/front-office/design-system/layouts/Header/atoms";
import Loader from "apps/front-office/design-system/components/Loader";

function RentPaymentPage() {
  const headerModeValue = headerAtom.useValue();

  useEffect(() => {
    headerAtom.update({ mode: "form" });
  }, []);

  // if (headerModeValue.mode !== "form") return <Loader />;

  return (
    <>
      <Helmet title={trans("rentPayment")} />
      <>
        <PageHeader />
        <Card title="fillForm">
          <RentPaymentContent />
          <FloatingButtons />
        </Card>
      </>
    </>
  );
}

export default RentPaymentPage;
