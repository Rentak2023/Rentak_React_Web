import { Flex } from "apps/front-office/design-system/components/Grids";
import React from "react";
import Service from "./Service";

const MobileServices = ({ services }) => {
  return (
    <Flex direction="column">
      {services.map(service => (
        <Service
          icon={service.icon}
          title={service.title}
          description={service.description}
          link={service.link}
          color={service.color}
        />
      ))}
    </Flex>
  );
};

export default MobileServices;
