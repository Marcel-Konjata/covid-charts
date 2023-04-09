import { apiInstance } from "@/restAPI/config";
import {
  dataQueryKeys,
  Datum,
  Pagination,
  RequestPayload,
} from "@/restAPI/data/types";
import { QueryClient, useQuery } from "@tanstack/react-query";

const AreaType = "overview",
  AreaName = "united kingdom";

export interface GetAllDataResponse {
  length: number;
  maxPageLimit: number;
  totalRecords: number;
  data: Datum[];
  requestPayload: RequestPayload;
  pagination: Pagination;
}

const filters = [`areaType=${AreaType}`, `areaName=${AreaName}`],
  structure = {
    date: "date",
    name: "areaName",
    code: "areaCode",
    dailyCases: "newCasesByPublishDate",
    cumulativeCases: "cumCasesByPublishDate",
    dailyDeaths: "newDeaths28DaysByPublishDate",
    cumulativeDeaths: "cumDeaths28DaysByPublishDate",
  };

const apiParams = {
  filters: filters.join(";"),
  structure: JSON.stringify(structure),
};
export const getAllData = async (): Promise<GetAllDataResponse> => {
  const response = await apiInstance.get<GetAllDataResponse>("/data", {
    params: apiParams,
  });
  return response.data;
};

export const getAllDataPrefetchQuery = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: dataQueryKeys.getAllData,
    queryFn: getAllData,
  });
};

export const useGetAllDataQuery = (enabled: boolean = true) => {
  return useQuery({
    queryKey: dataQueryKeys.getAllData,
    queryFn: getAllData,
    enabled,
    refetchOnWindowFocus: false,
  });
};
