import { GetLatestResponse } from "@/restAPI/data/getLatestNationData";

export const transformResponseDataFromLatestIncidenceAndMortalityChart = (
  data?: GetLatestResponse
) => {
  if (data == null) return [];
  const { data: dataToProcess } = data;
  return dataToProcess.flatMap((item) => {
    return Object.entries(item).map((entry) => ({
      type: entry[0],
      value: (entry[1] ?? 0) as number,
    }));
  });
};
