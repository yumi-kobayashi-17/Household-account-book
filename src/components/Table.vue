<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    props: {
      tableMessage: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const elements: number[] = [...Array(10)].map((_, i) => i + 1);
      const payments: number[] = elements.map((element) => element * 2);
      return { props, elements, payments };
    },
  });
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
          <th class="px-2" v-for="element in elements">支出{{ element }}</th>
        </tr>
        <tr>
          <td>1</td>
          <td v-for="payment in payments">{{ payment }}</td>
        </tr>
        <tr>
          <td>2</td>
          <td v-for="payment in payments">{{ payment }}</td>
        </tr>
        <tr>
          <td>3</td>
          <td v-for="payment in payments">{{ payment }}</td>
        </tr>
        <tr>
          <td>4</td>
          <td v-for="payment in payments">{{ payment }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
