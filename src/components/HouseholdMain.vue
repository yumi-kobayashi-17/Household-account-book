<script lang="ts">
  import Form from '@/components/Form.vue';
  import Table from '@/components/Table.vue';
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    components: {
      Form,
      Table,
    },
    setup(props) {
      return { props };
    },
    data() {
      return {
        isActive: 1,
      };
    },
    methods: {
      change(num: number) {
        this.isActive = num;
      },
    },
  });
</script>

<template>
  <div class="flex font-sans">
    <div class="w-1/5 h-full px-3 py-4 fixed top-0 left-0 bg-red-100">
      <nav class="text-center">
        <button class="text-2xl" @click="change(1)">入力フォーム</button><br />
        <button class="text-2xl" @click="change(2)">結果</button>
      </nav>
    </div>
    <div class="body px-3 py-4 fixed top-0">
      <div class="text-center" v-if="isActive === 1">
        <Form formMessage="formMessage"></Form>
      </div>
      <div class="text-center" v-else-if="isActive === 2">
        <Table tableMessage="tableMessage"></Table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
