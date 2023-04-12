import { ChartCard } from "@/features/charts/ChartCard";
import Dynamic from "next/dynamic";
import { useMemo } from "react";
import { transformResponseDataFromLatestIncidenceAndMortalityChart } from "@/features/charts/homepage/latestKnownDataChart/transformResponseDataFromLatestIncidenceAndMortalityChart";
import { useGetLatestNationDataQuery } from "@/restAPI/data/getLatestNationData";
import { ErrorComponent } from "@/features/charts/homepage/ErrorComponent";
import { DynamicPieChart } from "@/features/charts/homepage/latestKnownDataChart/DynamicPieChart";
import { dummyClick } from "@/features/dummyClick";

const Pie = Dynamic(() => import("@ant-design/charts").then(({ Pie }) => Pie), {
  ssr: false,
});
export const LatestIncidenceAndMortalityChart = () => {
  const { data, error, refetch } = useGetLatestNationDataQuery("england");

  const chartData = useMemo(
    () => transformResponseDataFromLatestIncidenceAndMortalityChart(data),
    [data]
  );

  return (
    <ChartCard
      numberOfMessages={2}
      chartTitle={"Latest incidence / mortality"}
      onMessageClick={dummyClick}
    >
      {error ? (
        <ErrorComponent
          errorText={`we couldn't get data for chart`}
          retry={refetch}
        />
      ) : (
        /* @ts-ignore antd Pie has improper type inference for statistics.title*/
        <DynamicPieChart data={chartData} />
      )}
    </ChartCard>
  );
};
