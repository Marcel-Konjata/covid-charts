import {
  dataQueryKeys,
  IGetAllData,
  Nation,
  RequestPayload,
  Pagination,
} from "@/restAPI/data/types";
import { apiInstance } from "@/restAPI/config";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export interface GetAllNationDataResponse {
  length: number;
  maxPageLimit: number;
  totalRecords: number;
  data: IGetAllData[];
  requestPayload: RequestPayload;
  pagination: Pagination;
}

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
  try {
    const response = await apiInstance.get<GetAllNationDataResponse>("/data", {
      params: apiParams,
    });

    return response.data;
  } catch (e) {
    throw new Error((e as AxiosError).message);
  }
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
