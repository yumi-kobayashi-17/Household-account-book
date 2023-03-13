<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';
  // import { ref } from 'vue';
  import type { PropType } from 'vue';
  import type { PaymentsDataType } from '@/components/HouseholdMain.vue';

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
        type: Number,
        required: true,
      },
      paymentsData: {
        type: Array as PropType<PaymentsDataType[]>,
        required: true,
      },
      setDate: {
        type: Function as PropType<(arg: number) => void>,
        required: true,
      },
    },

    setup(props) {
      return { props };
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
        <tr class="pr-5 bg-slate-100 border-2">
          <th class="pr-5">日付</th>
          <th class="pr-5">曜日</th>
          <th class="pr-20">食費</th>
          <th class="pr-20">固定費</th>
        </tr>
        <tr v-for="p in paymentsData" class="border-2" :class="p.tableClass">
          <td>
            <button @click="setDate(p.date)" class="pr-5">{{ p.date }}</button>
          </td>
          <td class="pr-5">{{ p.day }}</td>
          <td class="pr-20">{{ p.cost.foodCost }}</td>
          <td class="pr-20">{{ p.cost.fixedCost }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
