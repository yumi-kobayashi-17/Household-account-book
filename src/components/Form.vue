<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';
  import { ref } from 'vue';
  import type { PropType } from 'vue';

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
      selectCostType: {
        type: String,
        required: true,
      },
      cost: {
        type: Number,
        required: true,
      },
      setDate: {
        type: Function as PropType<(arg: number) => void>,
        required: true,
      },
      setCostType: {
        type: Function as PropType<(arg: string) => void>,
        required: true,
      },
      setCost: {
        type: Function as PropType<(arg: number) => void>,
        required: true,
      },
    },
    setup(props) {
      const selectedYear = ref<number>(2023);
      const selectedMonth = ref<number>(4);
      const selectDate2 = ref(props.selectDate);
      const cost2 = ref(props.cost);
      const selectCostType2 = ref(props.selectCostType);

      return { props, selectedYear, selectedMonth, selectDate2, cost2, selectCostType2 };
    },
  });
</script>

<template>
  <div class="flex flex-col">
    <span class="text-cyan-500">{{ props.formMessage }}</span>
    <div class="pt-6">
      <select class="border-2 border-slate-500 mr-3" name="year">
        <option value="2023">2023</option>
      </select>
      <select class="border-2 border-slate-500 mr-3" name="month">
        <option value="4">4</option>
      </select>
      <select v-model="selectDate2" class="border-2 border-slate-500 mr-3" name="date">
        <option :value="date" v-for="date in 30">{{ date }}</option>
      </select>
      <select v-model="selectCostType2" class="border-2 border-slate-500" name="costType">
        <option value="foodCost">食費</option>
        <option value="fixedCost">固定費</option>
      </select>
    </div>
    <div class="flex flex-row pt-6">
      <form class="pr-8">
        <input v-model="cost2" type="number" class="border-2 border-black rounded-lg" />
      </form>
      <div>
        <button
          @click="
            props.setDate(selectDate2);
            props.setCostType(selectCostType2);
            props.setCost(cost2);
          "
          class="font-medium bg-cyan-200 hover:bg-cyan-300 rounded-lg px-4"
        >
          追加
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
