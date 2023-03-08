<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';
  import type { PropType } from 'vue';


  export default defineComponent({
    props: {
      tableMessage: {
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
      },
      foodCosts: {
        required: true,
      },
      fixedCosts: {
        required: true,
      },
      setDate: {
        type: Function as PropType<(arg: number) => void>,
        required: true,
      },
      setIsActive: {
        type: Function as PropType<(arg: number) => void>,
        required: true,
      },
    },

    setup(props) {
      const dates: number[] = [...Array(30)].map((_, i) => i + 1);
      const days: string[] = ['土', '日', '月', '火', '水', '木', '金'];
      const dateLists = dates.map((key) => ({ date: key, day: '' }));
      const list = dateLists.map((element) => {
        for (let i = 0; i < dateLists.length; i++) {
          const WEEKDAY = 7;
          if (element.date % WEEKDAY === 0) {
            element.day = days[6];
          } else if (element.date % WEEKDAY === i) {
            element.day = days[i - 1];
          }
        }
      });
      // type Cost = [{ date: number; foodCost: number; fixedCost: number }];
      // const tableClass: string[] = ['bg-red-200','bg-orange-200','bg-yellow-200','bg-green-200','bg-sky-200','bg-purple-200','bg-rose-200']
      return { props, dates, dateLists };
    },
  });
</script>

<template>
  <div class="flex flex-col">
    <div>
      <span class="text-pink-500">{{ props.tableMessage }}</span>
    </div>
    <div>
      <table class="border-4 table-fixed">
        <th>
          <th class="pr-5 bg-slate-100 border-2">日付</th>
          <tr v-for="dateList in dateLists" class="border-2">
            <td><button @click="setDate(dateList.date);setIsActive(1)">{{ dateList.date }}</button></td>
          </tr>
        </th>
        <th>
          <th class="pr-5 bg-slate-100 border-2">曜日</th>
          <tr v-for="dateList in dateLists" class="border-2">
            <td>{{ dateList.day }}</td>
          </tr>
        </th>
        <th>
          <th class="pr-28 bg-slate-100 border-2">食費</th>
          <tr v-for="foodCost in foodCosts" class="border-2 w-36 h-7">
            <td>{{ foodCost }}</td>
          </tr>
        </th>
        <th>
          <th class="pr-28 bg-slate-100 border-2">固定費</th>
          <tr v-for="fixedCost in fixedCosts" class="border-2 w-36 h-7">
            <td>{{ fixedCost }}</td>
          </tr>
        </th>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
