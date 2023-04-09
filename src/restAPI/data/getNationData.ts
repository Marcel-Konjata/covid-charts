import { dataQueryKeys, Nation } from "@/restAPI/data/types";
import { apiInstance } from "@/restAPI/config";
import {
  FetchQueryOptions,
  QueryClient,
  QueryOptions,
  useQuery,
} from "@tanstack/react-query";
import { getAllData } from "@/restAPI/data/getAllData";

const structure = JSON.stringify({
  date: "date",
  name: "areaName",
  code: "areaCode",
  dailyCases: "newCasesByPublishDate",
  cumulativeCases: "cumCasesByPublishDate",
  dailyDeaths: "newDeaths28DaysByPublishDate",
  cumulativeDeaths: "cumDeaths28DaysByPublishDate",
});

export const getNationData = async (nation: Nation) => {
  const filters = [`areaType=nation`, `areaName=${nation}`];
  const apiParams = {
    filters: filters.join(";"),
    structure,
  };
  const response = await apiInstance.get("/data", {
    params: apiParams,
  });

  return response.data;
};

export const getNationDataPrefetchQuery = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: dataQueryKeys.getAllData,
    queryFn: getAllData,
  });
};

export const useGetNationDataQuery = (enabled: boolean = true) => {
  return useQuery({
    queryKey: dataQueryKeys.getAllData,
    queryFn: getAllData,
    refetchOnWindowFocus: false,
    enabled,
  });
};
