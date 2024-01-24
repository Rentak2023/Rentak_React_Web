import React from "react";
import { Tabs } from "@mantine/core";
import { TabsWrapper } from "./style";
import { Container } from "apps/front-office/design-system/components/Grids";
import { trans } from "@mongez/localization";
import UnitOverviewTab from "./UnitOverviewTab";
import { H4 } from "apps/front-office/design-system/components/Typography";
import InspectionTab from "./InspectionTab";

const TabsComponent = ({ property }) => {
  return (
    <TabsWrapper>
      <Container>
        <Tabs color="teal" defaultValue="first">
          <Tabs.List>
            <Tabs.Tab value="first">
              <H4 weight="500">{trans("unitOverview")}</H4>
            </Tabs.Tab>
            <Tabs.Tab value="second" color="blue">
              <H4 weight="500">{trans("inspection")}</H4>
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="first" pt="xs">
            <UnitOverviewTab property={property} />
          </Tabs.Panel>

          <Tabs.Panel value="second" pt="xs">
            <InspectionTab property={property} />
          </Tabs.Panel>
        </Tabs>
      </Container>
    </TabsWrapper>
  );
};

export default TabsComponent;
