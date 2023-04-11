export interface Datum {
  date: Date;
  areaName: AreaName;
  areaCode: AreaCode;
  confirmedRate: number | null;
  latestBy: number;
  confirmed: number;
  deathNew: number | null;
  death: number | null;
  deathRate: number | null;
}

export enum AreaCode {
  K02000001 = "K02000001",
}

export enum AreaName {
  UnitedKingdom = "United Kingdom",
}

export interface Pagination {
  current: string;
  next: null;
  previous: null;
  first: string;
  last: string;
}

export interface RequestPayload {
  structure: Structure;
  filters: Filter[];
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
