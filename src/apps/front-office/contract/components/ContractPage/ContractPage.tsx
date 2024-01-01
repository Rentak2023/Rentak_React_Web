import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import PageContent from "apps/front-office/design-system/components/PageContent";
import PageHeader from "apps/front-office/design-system/components/PageHeader";
import ContractContent from "./ContractContent";
import ContractGif from "shared/assets/images/contract.gif";

function ContractPage() {
  return (
    <>
      <Helmet title={trans("contract")} />
      <>
        <PageHeader
          title="contractInfo"
          subTitle="contractSubTitle"
          icon={<img src={ContractGif} />}
        />
        <PageContent>
          <ContractContent />
        </PageContent>
      </>
    </>
  );
}

export default ContractPage;
