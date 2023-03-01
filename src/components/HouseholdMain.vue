<script lang="ts">
  import Form from '@/components/Form.vue';
  import Table from '@/components/Table.vue';
  import { defineComponent } from '@vue/runtime-core';
  import { ref } from 'vue';

  export default defineComponent({
    components: {
      Form,
      Table,
    },
    setup(props) {
      const formMessage = ref('formMessage');
      const tableMessage = ref('tableMessage');
      return { props, isActive, setIsActive, formMessage, tableMessage };
    },
  });

  const isActive = ref(1);
  const setIsActive = (num: number) => {
    isActive.value = num;
  };
</script>

<template>
  <div class="flex font-sans">
    <div class="w-1/5 h-full px-3 py-4 fixed top-0 left-0 bg-red-100">
      <div class="text-center flex flex-col">
        <button class="text-2xl" @click="setIsActive(1)">入力フォーム</button>
        <button class="text-2xl" @click="setIsActive(2)">結果</button>
      </div>
    </div>
    <div class="body px-3 py-4 fixed top-0">
      <div class="text-center" v-if="isActive === 1">
        <Form v-bind:formMessage="formMessage" />
      </div>
      <div class="text-center" v-else-if="isActive === 2">
        <Table v-bind:tableMessage="tableMessage" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
