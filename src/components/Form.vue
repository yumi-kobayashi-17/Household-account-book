<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';
  import { ref } from 'vue';
  import type { PropType } from 'vue';
  import type { PaymentsDataType, CostTypes } from '@/types/util';
  import { useTableStore } from '@/stores/table';
  import { pinia } from '../stores/index';
  // import { storeToRef } from 'pinia';

  export default defineComponent({
    props: {
      formMessage: {
        type: String,
        required: true,
      },
      selectDate: {
        type: Number,
        required: true,
      },
      costTypes: {
        type: Array as PropType<CostTypes[]>,
        required: true,
      },
      selectCostType: {
        type: Number,
        required: true,
      },
      cost: {
        type: Number,
        required: true,
      },
      paymentsData: {
        type: Array as PropType<PaymentsDataType[]>,
        required: true,
      },
      setPayment: {
        type: Function as PropType<(arg1: number, arg2: number, arg3: number) => void>,
        required: true,
      },
    },
    setup(props) {
      const selectedYear = ref<number>(2023);
      const selectedMonth = ref<number>(4);
      const currentDate = ref(props.selectDate);
      const currentCost = ref(props.cost);
      const currentCostType = ref(props.selectCostType);

      return { props, selectedYear, selectedMonth, currentDate, currentCost, currentCostType };
    },
  });

  const tableStore = useTableStore(pinia);
  console.log(tableStore.formMessage);
  tableStore.serMessage('hello!');
  console.log(tableStore.formMessage);
</script>

<template>
  <div class="flex flex-col">
    <!-- <span class="text-cyan-500">{{ props.formMessage }}</span> -->
    <div class="pt-6">
      <select class="border-2 border-slate-500 mr-3" name="year">
        <option value="2023">2023</option>
      </select>
      <select class="border-2 border-slate-500 mr-3" name="month">
        <option value="4">4</option>
      </select>
      <select v-model="currentDate" class="border-2 border-slate-500 mr-3" name="date">
        <option :value="date" v-for="date in paymentsData.length">{{ date }}</option>
      </select>
      <select v-model="currentCostType" class="border-2 border-slate-500" name="costType">
        <option :value="costType.id" v-for="costType in costTypes">{{ costType.item }}</option>
      </select>
    </div>
    <div class="flex flex-row pt-6">
      <form class="pr-8">
        <input v-model="currentCost" type="number" class="border-2 border-black rounded-lg" />
      </form>
      <div>
        <button
          @click="props.setPayment(currentDate, currentCostType, currentCost)"
          class="font-medium bg-cyan-200 hover:bg-cyan-300 rounded-lg px-4"
        >
          追加
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
