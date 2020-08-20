import {MarketHeader} from "./interfaces";

export const MARKET_LIST_HEADERS: MarketHeader[] = [
  {id: "name", label: "Name", minWidth: 170},
  {
    id: "pair",
    label: "Pair",
    minWidth: 100,
    format: (value: string | number): string =>
      value.toString().split(":")[1].toUpperCase(),
  },
  {
    id: "symbol",
    label: "Symbol",
    minWidth: 100,
    format: (value: string | number): string => value.toString().toUpperCase(),
  },
  {
    id: "marketCap",
    label: "Market Cap",
    minWidth: 100,
    format: (value: string | number): string => `$ ${value.toLocaleString("en-US")}`,
  },
  {
    id: "averageLastPrice",
    label: "Average Last Price",
    minWidth: 100,
    format: (value: string | number): string =>
      `$ ${parseFloat(value.toString()).toFixed(2)}`,
  },
];
