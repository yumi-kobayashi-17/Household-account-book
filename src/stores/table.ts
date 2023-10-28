import { defineStore } from 'pinia';
import type { Days, CostTypes } from '@/types/util';

interface State {
  isActive: number;
  pageId: {
    formPage: number;
    tablePage: number;
  };
  dates: number[];
  days: Days[];
  costTypes: CostTypes[];
  selectDate: number;
  selectCostType: number;
  cost: number;
}
export const useTableStore = defineStore({
  id: 'table',
  state: (): State => {
    return {
      isActive: 1,
      pageId: { formPage: 1, tablePage: 2 },
      dates: [...Array(30)].map((_, i) => i + 1),
      days: [
        { id: 0, day: '土', style: 'bg-red-100' },
        { id: 1, day: '日', style: 'bg-orange-100' },
        { id: 2, day: '月', style: 'bg-yellow-100' },
        { id: 3, day: '火', style: 'bg-green-100' },
        { id: 4, day: '水', style: 'bg-sky-100' },
        { id: 5, day: '木', style: 'bg-purple-100' },
        { id: 6, day: '金', style: 'bg-rose-100' },
      ],
      costTypes: [
        { id: 1, item: '食費' },
        { id: 2, item: '固定費' },
      ],
      selectDate: 1,
      selectCostType: 1,
      cost: 0,
    };
  },
  getters: {
    paymentsData: (state) => {
      return state.dates
        .map((date, index) => ({
          date,
          day: state.days.find((elm) => elm.id === index % 7)?.day,
          tableClass: state.days.find((elm) => elm.id === index % 7)?.style,
        }))
        .map((elm) => ({
          date: elm.date,
          day: elm.day,
          tableClass: elm.tableClass,
          cost: { foodCost: 0, fixedCost: 0 },
        }));
    },
  },
  actions: {
    setIsActive(num: number): void {
      this.isActive = num;
    },
    setCostType(selectedCostType: number): void {
      this.selectCostType = selectedCostType;
    },
    setDate(selectedDate: number): void {
      this.selectDate = selectedDate;
      this.setIsActive(this.pageId.formPage);
    },
    setCost(addedCost: number): void {
      if (this.selectCostType === this.costTypes[0].id) {
        this.paymentsData[this.selectDate - 1].cost.foodCost += addedCost;
      } else if (this.selectCostType === this.costTypes[1].id) {
        this.paymentsData[this.selectDate - 1].cost.fixedCost += addedCost;
      }
    },
    setPayment(selectedDate: number, selectedCostType: number, addedCost: number): void {
      this.setDate(selectedDate);
      this.setCostType(selectedCostType);
      this.setCost(addedCost);
    },
  },
});
