import { ChartCard } from "@/features/charts/ChartCard";
import { useGetAllNationDataQuery } from "@/restAPI/data/getAllNationData";

export const IncidenceAndMortalityChart = () => {
  const { data } = useGetAllNationDataQuery("united kingdom");
  return (
    <ChartCard numberOfMessages={4} chartTitle={"Chart 1"}>
      karticka
    </ChartCard>
  );
};
