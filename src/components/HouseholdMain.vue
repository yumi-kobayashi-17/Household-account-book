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
      const setIsActive = (num: number) => {
        isActive.value = num;
      };
      const selectDate = ref<number>(1);
      const selectCostType = ref<string>('foodCost');
      const cost = ref<number>();
      // type Cost = { date: number; foodCost: number; fixedCost: number };
      const foodCosts = ref(Array(30));
      const fixedCosts = ref(Array(30));

      const setDate = (selectedDate: number) => {
        selectDate.value = selectedDate;
      };
      const setCostType = (selectedCostType: string) => {
        selectCostType.value = selectedCostType;
      };
      const setCost = (addedCost: number) => {
        if (selectCostType.value === 'foodCost') {
          foodCosts.value[selectDate.value - 1] = addedCost;
        } else if (selectCostType.value === 'fixedCost') {
          fixedCosts.value[selectDate.value - 1] = addedCost;
        }
      };

      return {
        props,
        isActive,
        setIsActive,
        selectDate,
        selectCostType,
        formMessage,
        tableMessage,
        setDate,
        setCostType,
        setCost,
        foodCosts,
        fixedCosts,
        cost,
      };
    },
  });
</script>

<template>
  <div class="flex flex-row font-sans">
    <div class="w-1/5 h-screen px-3 py-4 fixed top-0 left-0 bg-red-100">
      <div class="text-center flex flex-col">
        <button class="text-2xl" @click="setIsActive(1)">入力フォーム</button>
        <button class="text-2xl" @click="setIsActive(2)">結果</button>
      </div>
    </div>
    <div class="flex justify-center w-4/5 h-screen px-3 py-4 fixed top-0 right-0 overflow-y-scroll">
      <div class="text-center" v-if="isActive === 1">
        <Form
          :formMessage="formMessage"
          :select-date="selectDate"
          :select-cost-type="selectCostType"
          :cost="cost"
          :set-cost="setCost"
          :set-date="setDate"
          :set-cost-type="setCostType"
        />
      </div>
      <div class="text-center" v-else-if="isActive === 2">
        <Table
          :tableMessage="tableMessage"
          :select-date="selectDate"
          :select-cost-type="selectCostType"
          :cost="cost"
          :food-costs="foodCosts"
          :fixed-costs="fixedCosts"
          :set-date="setDate"
          :set-is-active="setIsActive"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
