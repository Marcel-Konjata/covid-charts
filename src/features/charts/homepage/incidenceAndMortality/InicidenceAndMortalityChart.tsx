import { ChartCard } from "@/features/charts/ChartCard";
import { useGetAllNationDataQuery } from "@/restAPI/data/getAllNationData";
import Dynamic from "next/dynamic";
import { useMemo } from "react";
import { transFormResponseDataForIncidenceAndMortalityChart2020 } from "@/features/charts/homepage/incidenceAndMortality/transFormResponseDataForIncidenceAndMortalityChart";

const Area = Dynamic(
  () => import("@ant-design/charts").then(({ Area }) => Area),
  {
    ssr: false,
  }
);
export const IncidenceAndMortalityChart = () => {
  const { data, error } = useGetAllNationDataQuery("england");

  const chartData = useMemo(
    () => transFormResponseDataForIncidenceAndMortalityChart2020(data),
    [data]
  );
  console.log(chartData);

  const config = {
    data: chartData,
    xField: "date",
    yField: "numberOfCases",
    seriesField: "type",
    isGrouped: true,
    xAxis: {
      tickCount: 5,
      range: [1, 0],
    },
  };
  return (
    <ChartCard numberOfMessages={4} chartTitle={"Chart 1"}>
      <>
        <Area {...config} />
      </>
    </ChartCard>
  );
};
