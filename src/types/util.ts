export type Days = {
  id: number;
  day: string;
  style: string;
};
export type CostTypes = {
  id: number;
  item: string;
};
export type PaymentsDataType = {
  date: number;
  day: string;
  tableClass: string;
  cost: {
    foodCost: number | null;
    fixedCost: number | null;
  };
};
