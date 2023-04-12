import { ChartCard } from "@/features/charts/ChartCard";
import Dynamic from "next/dynamic";
import { useMemo } from "react";
import { transformResponseDataFromLatestIncidenceAndMortalityChart } from "@/features/charts/homepage/latestKnownDataChart/transformResponseDataFromLatestIncidenceAndMortalityChart";
import { useGetLatestNationDataQuery } from "@/restAPI/data/getLatestNationData";

const Pie = Dynamic(() => import("@ant-design/charts").then(({ Pie }) => Pie), {
  ssr: false,
});
export const LatestIncidenceAndMortalityChart = () => {
  const { data, error } = useGetLatestNationDataQuery("england");

  const chartData = useMemo(
    () => transformResponseDataFromLatestIncidenceAndMortalityChart(data),
    [data]
  );
  console.log(chartData);

  const config = {
    appendPadding: 10,
    data: chartData,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: "12px",
        },
        content: "Incidence/Mortality",
      },
    },
  };
  return (
    <ChartCard numberOfMessages={2} chartTitle={"Latest incidence / mortality"}>
      <>
        {/* @ts-ignore antd Pie has improper type inference for statistics.title*/}
        <Pie {...config} />
      </>
    </ChartCard>
  );
};
