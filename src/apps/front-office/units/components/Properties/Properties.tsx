import React, { Fragment, useEffect, useState } from "react";
import { getAllProperties } from "../../services/services";
import Loader from "apps/front-office/design-system/components/Loader";
import { Grid, Space } from "@mantine/core";
import {
  Col,
  Container,
  Flex,
} from "apps/front-office/design-system/components/Grids";
import { currentPageAtom, paramsAtom, propertiesAtom, totalPagesAtom } from "../../atoms";
import { Pagination as MantinePagination } from "@mantine/core";
import { PaginationWrapper, PropertiesWrapper, Wrapper } from "./style";
import { DirectionIcon } from "shared/assets/svgs";
import {
  P4,
  Small,
} from "apps/front-office/design-system/components/Typography";
import { theme } from "apps/front-office/design-system";
import { trans } from "@mongez/localization";
import Is from "@mongez/supportive-is";
import Property from "apps/front-office/design-system/components/Property";

const Properties = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = propertiesAtom.useState();
  const [currentPage, setCurrentPage] = currentPageAtom.useState();
  const [searchParams, setSearchParams] = paramsAtom.useState();

  const pageSize = 10; // Adjust the page size as needed
  // const [totalPages, setTotalPages] = useState(0);
  const [totalPages, setTotalPages] = totalPagesAtom.useState();

  const getProperties = async () => {
    setIsLoading(true);
    try {
      const response = await getAllProperties({
        page: currentPage.currentPage,
        pageSize: pageSize,
        ...searchParams.params,
      });
      setProperties({ properties: response.data.items });
      // Calculate the total pages based on the total number of properties and page size
      setTotalPages({pages : Math.floor(response.data.total_count / pageSize)});
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProperties();
  }, [currentPage.currentPage]); // Add currentPage as a dependency

  const handlePageChange = newPage => {
    setCurrentPage({ currentPage: newPage });
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <Wrapper>
        <Container>
          {Is.empty(properties.properties) ? (
            <Flex justify="center" align="center" fullWidth>
              <Space h={100} />
              <P4>{trans("noItems")}</P4>
              <Space h={100} />
            </Flex>
          ) : (
            <>
              <Small color={theme.colors.secondary[400]} className="results">
                {`${trans("showing")} ${pageSize} ${trans("results")}, ${trans(
                  "page",
                )} ${currentPage.currentPage} ${trans("of")} ${totalPages.pages} `}
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
                    value={currentPage.currentPage}
                    total={totalPages.pages as any}
                    onChange={handlePageChange}
                    nextIcon={() => <DirectionIcon type="right" />}
                    previousIcon={() => <DirectionIcon type="left" />}
                  />
                </PaginationWrapper>
              </PropertiesWrapper>
            </>
          )}
        </Container>
      </Wrapper>
    </>
  );
};

export default Properties;
