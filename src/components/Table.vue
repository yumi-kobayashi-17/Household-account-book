<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';
  import { ref,computed } from 'vue';
  import type { PropType } from 'vue';

  export default defineComponent({
    props: {
      tableMessage: {
        type: String,
        required: true,
      },
      dateList: {
        type: Object,
        required: true,
      },
      selectDate: {
        type: Number,
        required: true,
      },
      selectCostType: {
        type: Number,
        required: true,
      },
      paymentsData:{
        type: Object,
        required: true,
      },
      setDate: {
        type: Function as PropType<(arg: number) => void>,
        required: true,
      },
    },

    setup(props) {

    //   const colorClass: string[] = ['bg-red-200','bg-orange-200','bg-yellow-200','bg-green-200','bg-sky-200','bg-purple-200','bg-rose-200']
    // const tableClass = computed(() => {
    //   return colorClass[]
    // });
      return { props };
    },
  });
</script>

<template>
  <div class="flex flex-col">
    <div>
      <!-- <p>{{ tableClass }}</p> -->
      <span class="text-pink-500">{{ props.tableMessage }}</span>
    </div>
    <div>
      <table class="border-4 table-fixed">
        <th>
          <th class="pr-5 bg-slate-100 border-2">日付</th>
          <tr v-for="d in dateList" class="border-2">
            <td><button @click="setDate(d.date)">{{ d.date }}</button></td>
          </tr>
        </th>
        <th>
          <th class="pr-5 bg-slate-100 border-2">曜日</th>
          <tr v-for="d in dateList" class="border-2" >
            <td>{{ d.day }}</td>
          </tr>
        </th>
        <th>
          <th class="pr-28 bg-slate-100 border-2">食費</th>
          <tr v-for="payment in paymentsData" class="border-2 w-36 h-7">
            <td>{{ payment.cost.foodCost }}</td>
          </tr>
        </th>
        <th>
          <th class="pr-28 bg-slate-100 border-2">固定費</th>
          <tr v-for="payment in paymentsData" class="border-2 w-36 h-7">
            <td>{{ payment.cost.fixedCost }}</td>
          </tr>
        </th>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
