import {string} from "prop-types";

export interface MarketHeader {
  id: "name" | "pair" | "symbol" | "marketCap" | "averageLastPrice";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number | string) => string;
}

export interface MarketData {
  id: string;
  name: string;
  pair: string;
  symbol: string;
  marketCap: number;
  averageLastPrice: number;
}

export interface SymbolData {
  id: string;
  marketSymbol: string;
  ticker: {
    percentChange: string;
    lastPrice: string;
    lowPrice: string;
    highPrice: string;
    baseVolume: string;
    quoteVolume: string;
  };
}

export interface MarketItemProps {
  columns: MarketHeader[];
  row: MarketData;
  index: number;
}
