import {
  dataQueryKeys,
  GetLatestData,
  GetLatestRequestPayload,
  Nation,
} from "@/restAPI/data/types";
import { apiInstance } from "@/restAPI/config";
import { AxiosError } from "axios";
import { QueryClient, useQuery } from "@tanstack/react-query";

const structure = {
  date: "date",
  name: "areaName",
  code: "areaCode",

  newCases: "newCasesByPublishDate",
  cumulativeCases: "cumCasesByPublishDate",

  newDeaths: "newDeathsByDeathDate",
  cumulativeDeaths: "cumDeathsByDeathDate",
};

export interface GetLatestResponse {
  length: number;
  maxPageLimit: number;
  totalRecords: number;
  data: GetLatestData[];
  requestPayload: GetLatestRequestPayload;
}
export const getLatestNationData = async (nation: Nation) => {
  const filters = [
    `areaType=${nation === "united kingdom" ? "overview" : "nation"}`,
    `areaName=${nation}`,
  ];

  try {
    const response = await apiInstance.get<GetLatestResponse>("/data", {
      params: {
        filters: filters.join(";"),
        structure: JSON.stringify(structure),
        latestBy: "newCasesByPublishDate",
      },
    });
    return response.data;
  } catch (e) {
    throw new Error((e as AxiosError).message);
  }
};

export const getNationLatestDataPrefetchQuery = async (
  queryClient: QueryClient,
  nation: Nation
) => {
  await queryClient.prefetchQuery({
    queryKey: dataQueryKeys.getLatestByDateNationData,
    queryFn: () => getLatestNationData(nation),
  });
};

export const useGetLatestNationDataQuery = (
  nation: Nation,
  enabled: boolean = true
) => {
  return useQuery({
    queryKey: dataQueryKeys.getLatestByDateNationData,
    queryFn: () => getLatestNationData(nation),
    refetchOnWindowFocus: false,
    enabled,
  });
};
