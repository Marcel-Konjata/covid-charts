import { GetAllNationDataResponse } from "@/restAPI/data/getAllNationData";

/**@description
 * due to specific antd charts needs there has to be some kind of transformation
 * that enables multilayer charts and pies for series key - type
 * */
export function transFormResponseDataForIncidenceAndMortalityChart2020(
  data?: GetAllNationDataResponse
) {
  if (data == null) return [];
  //note for smaller number of data is fine to use flat-map, however there is around 1k+ data coming from api - that means that for loop in this case is more performant algorithm
  const { data: dataToProcess } = data;
  const transformedData = [];
  for (let i = 0; i < dataToProcess.length; i++) {
    const year = new Date(dataToProcess[i].date).getFullYear();

    if (year === 2020) {
      transformedData.push({
        type: "cumulativeDeaths",
        numberOfCases: dataToProcess[i].cumulativeDeaths,
        date: dataToProcess[i].date,
      });

      transformedData.push({
        type: "cumulativeCases",
        numberOfCases: dataToProcess[i].cumulativeCases,
        date: dataToProcess[i].date,
      });
    }
  }

  return transformedData;
}
