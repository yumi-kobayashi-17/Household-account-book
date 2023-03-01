<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';

  export default defineComponent({
    props: {
      formMessage: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      return { props };
    },
  });
</script>

<template>
  <span class="text-cyan-500">{{ props.formMessage }}</span>
  <form>
    <input type="text" class="border-solid border-2 border-black rounded-lg" />
  </form>
</template>

<style scoped></style>
