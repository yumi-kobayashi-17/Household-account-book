<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';
  import { useTableStore } from '@/stores/table';
  import { pinia } from '@/stores/index';

  export default defineComponent({
    props: {
      tableMessage: {
        type: String,
        required: true,
      },
    },

    setup(props) {
      const tableStore = useTableStore(pinia);
      return { props, tableStore };
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
        <tr v-for="p in tableStore.paymentsData" class="border-2" :class="p.tableClass">
          <td>
            <button @click="tableStore.setDate(p.date)" class="pr-5">{{ p.date }}</button>
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
