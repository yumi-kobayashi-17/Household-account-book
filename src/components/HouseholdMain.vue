<script lang="ts">
  import Form from '@/components/Form.vue';
  import Table from '@/components/Table.vue';
  import { defineComponent } from '@vue/runtime-core';
  import { ref } from 'vue';

  export default defineComponent({
    components: {
      Form,
      Table,
    },
    setup(props) {
      const formMessage = ref('formMessage');
      const tableMessage = ref('4月');
      const isActive = ref(1);
      const pageId = { formPage: 1, tablePage: 2 };
      const setIsActive = (num: number) => {
        isActive.value = num;
      };
      const dates: number[] = [...Array(30)].map((_, i) => i + 1);
      const days = new Map([
        [0, '土'],
        [1, '日'],
        [2, '月'],
        [3, '火'],
        [4, '水'],
        [5, '木'],
        [6, '金'],
      ]);
      const dateList = dates.map((date, index) => ({ date, day: days.get(index % 7) ?? '' }));

      const selectDate = ref<number>(1);
      const costTypes = [
        { id: 1, item: 'foodCost' },
        { id: 2, item: 'fixedCost' },
      ];
      const selectCostType = ref<number>(costTypes[0].id);
      const cost = ref<number>();
      type paymentsDataType = {
        date: number;
        day: string;
        cost: {
          foodCost: number | null;
          fixedCost: number | null;
        };
      };
      const paymentsData: paymentsDataType[] = dateList.map((elm) => ({
        date: elm.date,
        day: elm.day,
        cost: { foodCost: null, fixedCost: null },
      }));

      const setDate = (selectedDate: number) => {
        selectDate.value = selectedDate;
        setIsActive(pageId.formPage);
      };
      const setCostType = (selectedCostType: number) => {
        selectCostType.value = selectedCostType;
      };
      const setCost = (addedCost: number) => {
        if (selectCostType.value === costTypes[0].id) {
          paymentsData[selectDate.value - 1].cost.foodCost = addedCost;
        } else if (selectCostType.value === costTypes[1].id) {
          paymentsData[selectDate.value - 1].cost.fixedCost = addedCost;
        }
      };
      const setPayment = (selectedDate: number, selectedCostType: number, addedCost: number) => {
        setDate(selectedDate);
        setCostType(selectedCostType);
        setCost(addedCost);
      };

      return {
        props,
        pageId,
        isActive,
        setIsActive,
        dateList,
        selectDate,
        costTypes,
        selectCostType,
        cost,
        formMessage,
        tableMessage,
        setDate,
        setPayment,
        paymentsData,
      };
    },
  });
</script>

<template>
  <div class="flex flex-row font-sans">
    <div class="w-1/5 h-screen px-3 py-4 fixed top-0 left-0 bg-red-100">
      <div class="text-center flex flex-col">
        <button class="text-2xl" @click="setIsActive(pageId.formPage)">入力フォーム</button>
        <button class="text-2xl" @click="setIsActive(pageId.tablePage)">結果</button>
      </div>
    </div>
    <div class="flex justify-center w-4/5 h-screen px-3 py-4 fixed top-0 right-0 overflow-y-scroll">
      <div class="text-center" v-if="isActive === 1">
        <Form
          :formMessage="formMessage"
          :date-list="dateList"
          :select-date="selectDate"
          :costTypes="costTypes"
          :select-cost-type="selectCostType"
          :set-payment="setPayment"
          :cost="cost"
        />
      </div>
      <div class="text-center" v-else-if="isActive === 2">
        <Table
          :tableMessage="tableMessage"
          :date-list="dateList"
          :select-date="selectDate"
          :select-cost-type="selectCostType"
          :set-date="setDate"
          :payments-data="paymentsData"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
