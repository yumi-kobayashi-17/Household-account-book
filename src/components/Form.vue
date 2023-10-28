<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';
  import { ref } from 'vue';
  import { useTableStore } from '@/stores/table';
  import { usePostalCodeStore } from '@/stores/postalCode';
  import { pinia } from '@/stores/index';
  import { storeToRefs } from 'pinia';

  export default defineComponent({
    props: {
      formMessage: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const postalCodeStore = usePostalCodeStore(pinia);
      const tableStore = useTableStore(pinia);
      const selectedYear = ref<number>(2023);
      const selectedMonth = ref<number>(4);
      const inputedAddress = ref<string>('');
      const { selectDate, selectCostType, cost } = storeToRefs(tableStore);

      return {
        props,
        selectedYear,
        selectedMonth,
        selectDate,
        cost,
        selectCostType,
        inputedAddress,
        tableStore,
        postalCodeStore,
      };
    },
  });
</script>

<template>
  <span class="mt-6 text-2xl text-cyan-500">{{ props.formMessage }}</span>
  <div class="flex flex-col">
    <div class="pt-8">
      <select class="border-2 border-slate-500 mr-3" name="year">
        <option value="2023">2023</option>
      </select>
      <select class="border-2 border-slate-500 mr-3" name="month">
        <option value="4">4</option>
      </select>
      <select v-model="selectDate" class="border-2 border-slate-500 mr-3" name="date">
        <option :value="date" v-for="date in tableStore.paymentsData.length">{{ date }}</option>
      </select>
      <select v-model="selectCostType" class="border-2 border-slate-500" name="costType">
        <option :value="costType.id" v-for="costType in tableStore.costTypes">{{ costType.item }}</option>
      </select>
    </div>
    <div class="flex justify-center">
      <div class="flex flex-row pt-6">
        <form class="pr-8">
          <input
            v-model="cost"
            type="number"
            class="border-2 border-black rounded-lg [&::-webkit-outer-spin-button] [&::-webkit-inner-spin-button]"
          />
        </form>
        <div>
          <button
            @click="tableStore.setPayment(selectDate, selectCostType, cost)"
            class="font-medium bg-cyan-200 hover:bg-cyan-300 rounded-lg px-4"
          >
            追加
          </button>
        </div>
      </div>
    </div>
    <p class="pt-6">郵便番号</p>
    <div class="flex justify-center">
      <div class="flex flex-row">
        <form class="pr-8">
          <input v-model="inputedAddress" type="text" class="border-2 border-black rounded-lg" />
        </form>
        <button
          @click="postalCodeStore.setAddress(inputedAddress)"
          class="font-medium bg-pink-200 hover:bg-pink-300 rounded-lg px-4"
        >
          追加
        </button>
      </div>
    </div>
    <p>結果</p>
    <p>{{ postalCodeStore.displayAddress }}</p>
  </div>
</template>

<style scoped></style>
