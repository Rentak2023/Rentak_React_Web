import React, { Fragment, useEffect, useState } from "react";
import { getAllProperties } from "../../services/services";
import Loader from "apps/front-office/design-system/components/Loader";
import Property from "./Property";
import { Grid } from "@mantine/core";
import {
  Col,
  Container,
} from "apps/front-office/design-system/components/Grids";
import { propertiesAtom } from "../../atoms";
import { Pagination as MantinePagination } from "@mantine/core";
import { PaginationWrapper, PropertiesWrapper, Wrapper } from "./style";
import { ArrowIcon, DirectionIcon } from "shared/assets/svgs";
import { Small } from "apps/front-office/design-system/components/Typography";
import { theme } from "apps/front-office/design-system";
import { trans } from "@mongez/localization";

const Properties = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = propertiesAtom.useState();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Adjust the page size as needed
  const [totalPages, setTotalPages] = useState(0);

  const getProperties = async () => {
    setIsLoading(true);
    try {
      const response = await getAllProperties({
        page: currentPage,
        pageSize: pageSize,
      });
      setProperties({ properties: response.data.items });
      // Calculate the total pages based on the total number of properties and page size
      setTotalPages(Math.floor(response.data.total_count / pageSize));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProperties();
  }, [currentPage]); // Add currentPage as a dependency

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  if (isLoading) return <Loader />;
  return (
    <Wrapper>
      <Container>
        <Small color={theme.colors.secondary[400]} className="results">
          {`${trans("showing")} ${pageSize} ${trans("results")}, ${trans(
            "page",
          )} ${currentPage} ${trans("of")} ${totalPages} `}
        </Small>
        <PropertiesWrapper>
          <Grid>
            {properties.properties.map((property: any) => (
              <Fragment key={property.property_id}>
                <Col span={12} md={6} lg={4}>
                  <Property property={property} />
                </Col>
              </Fragment>
            ))}
          </Grid>
          <PaginationWrapper>
            <MantinePagination
              value={currentPage}
              total={totalPages}
              onChange={handlePageChange}
              nextIcon={() => <DirectionIcon type="right" />}
              previousIcon={() => <DirectionIcon type="left" />}
            />
          </PaginationWrapper>
        </PropertiesWrapper>
      </Container>
    </Wrapper>
  );
};

export default Properties;
