import { dataQueryKeys, Nation } from "@/restAPI/data/types";
import { apiInstance } from "@/restAPI/config";
import { QueryClient, useQuery } from "@tanstack/react-query";

const structure = JSON.stringify({
  date: "date",
  name: "areaName",
  code: "areaCode",
  dailyCases: "newCasesByPublishDate",
  cumulativeCases: "cumCasesByPublishDate",
  dailyDeaths: "newDeaths28DaysByPublishDate",
  cumulativeDeaths: "cumDeaths28DaysByPublishDate",
});

export const getAllNationData = async (nation: Nation) => {
  const filters = [
    `areaType=${nation === "united kingdom" ? "overview" : "nation"}`,
    `areaName=${nation}`,
  ];
  const apiParams = {
    filters: filters.join(";"),
    structure,
  };
  const response = await apiInstance.get("/data", {
    params: apiParams,
  });

  return response.data;
};

export const getAllNationDataPrefetchQuery = async (
  queryClient: QueryClient,
  nation: Nation
) => {
  await queryClient.prefetchQuery({
    queryKey: dataQueryKeys.getNationData,
    queryFn: () => getAllNationData(nation),
  });
};

export const useGetAllNationDataQuery = (
  nation: Nation,
  enabled: boolean = true
) => {
  return useQuery({
    queryKey: dataQueryKeys.getNationData,
    queryFn: () => getAllNationData(nation),
    refetchOnWindowFocus: false,
    enabled,
  });
};
