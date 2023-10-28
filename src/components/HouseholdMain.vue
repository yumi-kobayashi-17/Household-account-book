<script lang="ts">
  import Form from '@/components/Form.vue';
  import Table from '@/components/Table.vue';
  import { defineComponent } from '@vue/runtime-core';
  import { ref } from 'vue';
  import { useTableStore } from '@/stores/table';
  import { pinia } from '@/stores/index';

  export default defineComponent({
    components: {
      Form,
      Table,
    },
    setup(props) {
      const tableStore = useTableStore(pinia);
      const formMessage = ref('家計簿');
      const tableMessage = ref('4月');

      return {
        props,
        formMessage,
        tableMessage,
        tableStore,
      };
    },
  });
</script>

<template>
  <div class="flex flex-row font-sans">
    <div class="w-1/5 h-screen px-3 py-4 fixed top-0 left-0 bg-red-100">
      <div class="text-center flex flex-col">
        <button class="mt-8 text-2xl" @click="tableStore.setIsActive(tableStore.pageId.formPage)">入力フォーム</button>
        <button class="mt-4 text-2xl" @click="tableStore.setIsActive(tableStore.pageId.tablePage)">結果</button>
      </div>
    </div>
    <div class="flex justify-center w-4/5 h-screen px-3 py-4 fixed top-0 right-0 overflow-y-scroll">
      <div class="text-center" v-if="tableStore.isActive === 1">
        <Form :formMessage="formMessage" />
      </div>
      <div class="text-center" v-else-if="tableStore.isActive === 2">
        <Table :tableMessage="tableMessage" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
