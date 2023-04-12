import { Col, Row } from "antd";
import { ChartCard } from "@/features/charts/ChartCard";
import styled from "@emotion/styled";
import { IncidenceAndMortalityChart } from "@/features/charts/homepage/incidenceAndMortality/InicidenceAndMortalityChart";
import { useGetLatestNationDataQuery } from "@/restAPI/data/getLatestNationData";
import { LatestIncidenceAndMortalityChart } from "@/features/charts/homepage/latestKnownDataChart/LatestIncidenceAndMortalityChart";

export const HomepageCovidIncidenceCharts = () => {
  const { data } = useGetLatestNationDataQuery("england");
  console.log(data, "latest");
  return (
    <Wrapper>
      <Row gutter={20}>
        <Col span={24} md={12}>
          <IncidenceAndMortalityChart />
        </Col>
        <Col span={24} md={12}>
          <LatestIncidenceAndMortalityChart />
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 10px;
`;
