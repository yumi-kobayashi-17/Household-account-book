<script lang="ts">
  // import Form from '@/components/Form.vue';
  // import Table from '@/components/Table.vue';
  import { defineComponent } from '@vue/runtime-core';
  // import type { PropType } from 'vue';

  export default defineComponent({
    props: {
      msg: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      return { props };
    },
  });

  //変数定義
  // const formMessage = '';
  // const tableMessage = '';
</script>

<template>
  <div class="container">
    <div class="flex">
      <div>
        <p>入力フォーム</p>
      </div>
      <div>
        <p>結果</p>
      </div>
    </div>
    <div class="body">
      <form action="">
        <input type="text" class="textline" />
      </form>
      <table>
        <tr>
          <th>日付</th>
          <th>支出1</th>
          <th>支出2</th>
          <th>支出3</th>
        </tr>
        <tr>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>2</td>
          <td>100</td>
          <td>1000</td>
          <td>2000</td>
        </tr>
        <tr>
          <td>3</td>
          <td>3000</td>
          <td>3000</td>
          <td>3000</td>
        </tr>
        <tr>
          <td>4</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
  }
  .flex {
    width: 20%;
    height: 1000px;
    background-color: antiquewhite;
    text-align: center;
    flex-direction: column;
  }

  .body {
    width: 80%;
    text-align: center;
    background-color: aqua;
  }
  .textline {
    border: solid;
    margin-bottom: 20px;
  }

  table {
    margin: auto;
  }
  tr,
  th,
  td {
    border: 1px solid;
  }
</style>
