<script setup lang="ts">
  const props = defineProps<{
    msg: string;
  }>();
  const x = true;
  if (x) {
    if (x) {
      if (x) {
        if (x) {
          if (x) {
            const y = 2;
          }
        }
      }
    }
  }
</script>

<template>
  <div>
    {{ props.msg }}
  </div>
</template>

<style scoped></style>
