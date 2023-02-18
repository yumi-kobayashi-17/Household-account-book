<script setup lang="ts">
  import Test1 from '@/components/Test1.vue';
  import Test2 from '@/components/Test2.vue';
  import { ref } from 'vue';
  const countTest1 = ref(2);
  const setCountTest1 = (newValue: number): number => (countTest1.value = newValue);
</script>

<template>
  <div>Hello,World</div>
  <Test1 msg="Test1" :count="countTest1" :set-count="setCountTest1" />
  <Test2 msg="Test2" />
</template>

<style scoped></style>
