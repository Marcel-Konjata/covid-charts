import { Col, Row } from "antd";
import { ChartCard } from "@/features/charts/ChartCard";

export const HomepageCovidIncidenceCharts = () => {
  return (
    <Row gutter={20}>
      <Col span={24} md={12}>
        <ChartCard numberOfMessages={4}>karticka</ChartCard>
      </Col>
      <Col span={24} md={12}>
        <ChartCard numberOfMessages={2}>karticka</ChartCard>
      </Col>
    </Row>
  );
};
