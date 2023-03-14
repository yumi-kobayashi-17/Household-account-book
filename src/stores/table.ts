// import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
export const useTableStore = defineStore({
  id: 'table',
  state: () => ({
    formMessage: 'formMessage',
  }),

  getters: {},
  actions: {
    serMessage(newMessage: string) {
      this.formMessage = newMessage;
    },
  },
});
