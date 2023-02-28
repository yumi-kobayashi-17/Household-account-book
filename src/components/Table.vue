<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    props: {
      tableMessage: String,
    },
    setup(props) {
      return { props };
    },
    data() {
      return {
        payments: [
          {
            key: 1,
            column1: 100,
            column2: 100,
            column3: 150,
            column4: 200,
            column5: 100,
            column6: 120,
            column7: 150,
            column8: 90,
            column9: 0,
            column10: 250,
          },
          {
            key: 2,
            column1: 200,
            column2: 100,
            column3: 150,
            column4: 200,
            column5: 100,
            column6: 120,
            column7: 150,
            column8: 90,
            column9: 0,
            column10: 250,
          },
          {
            key: 3,
            column1: 300,
            column2: 100,
            column3: 150,
            column4: 200,
            column5: 100,
            column6: 120,
            column7: 150,
            column8: 90,
            column9: 0,
            column10: 250,
          },
          {
            key: 4,
            column1: 400,
            column2: 100,
            column3: 150,
            column4: 200,
            column5: 100,
            column6: 120,
            column7: 150,
            column8: 90,
            column9: 0,
            column10: 250,
          },
        ],
      };
    },
  });

  export type ItemType = {
    key: number;
    column1: number;
    column2: number;
    column3: number;
    column4: number;
    column5: number;
    column6: number;
    column7: number;
    column8: number;
    column9: number;
    column10: number;
  };
</script>

<template>
  <div class="flex flex-col">
    <div>
      <span class="text-pink-500">{{ props.tableMessage }}</span>
    </div>
    <div>
      <table class="border-solid border-2">
        <tr class="bg-slate-100">
          <th>日付</th>
          <th>支出1</th>
          <th>支出2</th>
          <th>支出3</th>
          <th>支出4</th>
          <th>支出5</th>
          <th>支出6</th>
          <th>支出7</th>
          <th>支出8</th>
          <th>支出9</th>
          <th>支出10</th>
        </tr>
        <tr class="border-solid border-2" v-for="payment in payments">
          <td>{{ payment.key }}</td>
          <td>{{ payment.column1 }}</td>
          <td>{{ payment.column2 }}</td>
          <td>{{ payment.column3 }}</td>
          <td>{{ payment.column4 }}</td>
          <td>{{ payment.column5 }}</td>
          <td>{{ payment.column6 }}</td>
          <td>{{ payment.column7 }}</td>
          <td>{{ payment.column8 }}</td>
          <td>{{ payment.column9 }}</td>
          <td>{{ payment.column10 }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
