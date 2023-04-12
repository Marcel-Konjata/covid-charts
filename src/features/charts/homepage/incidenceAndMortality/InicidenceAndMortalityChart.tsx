import { ChartCard } from "@/features/charts/ChartCard";
import { useGetAllNationDataQuery } from "@/restAPI/data/getAllNationData";
import Dynamic from "next/dynamic";
import { useMemo } from "react";
import { transFormResponseDataForIncidenceAndMortalityChart2020 } from "@/features/charts/homepage/incidenceAndMortality/transFormResponseDataForIncidenceAndMortalityChart";
import { ErrorComponent } from "@/features/charts/homepage/ErrorComponent";
import { DynamicAreaChart } from "@/features/charts/homepage/incidenceAndMortality/DynamicAreaChart";

const Area = Dynamic(
  () => import("@ant-design/charts").then(({ Area }) => Area),
  {
    ssr: false,
  }
);
export const IncidenceAndMortalityChart = () => {
  const { data, error, refetch } = useGetAllNationDataQuery("england");

  const chartData = useMemo(
    () => transFormResponseDataForIncidenceAndMortalityChart2020(data),
    [data]
  );

  return (
    <ChartCard numberOfMessages={4} chartTitle={"Chart 1"}>
      {error ? (
        <ErrorComponent
          errorText={`we couldn't get data for chart`}
          retry={refetch}
        />
      ) : (
        <DynamicAreaChart data={chartData} />
      )}
    </ChartCard>
  );
};
