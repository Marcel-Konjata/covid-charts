export interface IGetAllData {
  date: Date;
  name: Nation;
  code: string;
  dailyCases: number;
  cumulativeCases: number;
  dailyDeaths: number | null;
  cumulativeDeaths: number | null;
}

export interface Pagination {
  current: string;
  next: null;
  previous: null;
  first: string;
  last: string;
}

export interface RequestPayload {
  structure: GetLatestStructure;
  filters: GetLatestFilter[];
  page: number;
}

export interface Filter {
  identifier: string;
  operator: string;
  value: string;
}

export interface Structure {
  date: string;
  areaName: string;
  areaCode: string;
  confirmedRate: string;
  confirmedNew: string;
  confirmed: string;
  deathNew: string;
  death: string;
  deathRate: string;
  latestBy: string;
}

export const dataQueryKeys = {
  getNationData: ["getNationData"],
  getLatestByDateNationData: ["getLatestNationData"],
};

/**
 * @description this type consist areaName query param in basic get EP,
 *
 * beware that if the areaType is set to overview Nation must be united kingdom, and vice versa if areaType is nation -> there must not be used united kingdom
 * */
export type Nation =
  | "england"
  | "northern ireland"
  | "scotland"
  | "whales"
  | "united kingdom";

export interface GetLatestData {
  date: Date;
  name: string;
  code: string;
  newCases: number;
  cumulativeCases: number;
  newDeaths: null;
  cumulativeDeaths: null;
}

export interface GetLatestRequestPayload {
  structure: GetLatestStructure;
  filters: GetLatestFilter[];
  latestBy: string;
}

export interface GetLatestFilter {
  identifier: string;
  operator: string;
  value: string;
}

export interface GetLatestStructure {
  date: string;
  name: string;
  code: string;
  newCases: string;
  cumulativeCases: string;
  newDeaths: string;
  cumulativeDeaths: string;
}
