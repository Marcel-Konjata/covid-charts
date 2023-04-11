import { Col, Row } from "antd";
import { ChartCard } from "@/features/charts/ChartCard";
import styled from "@emotion/styled";

export const HomepageCovidIncidenceCharts = () => {
  return (
    <Wrapper>
      <Row gutter={20}>
        <Col span={24} md={12}></Col>
        <Col span={24} md={12}>
          <ChartCard numberOfMessages={2} chartTitle={"Chart 2"}>
            karticka
          </ChartCard>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 10px;
`;
