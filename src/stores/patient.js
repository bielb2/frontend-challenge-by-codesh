import { defineStore } from "pinia";

export const usePatientStore = defineStore({
  id: "patient",
  state: () => ({
    counter: 0,
    patients: [],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    setPatients(patients) {
      this.patients = patients;
    },
  },
});
