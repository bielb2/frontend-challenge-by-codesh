import { defineStore } from "pinia";

export const usePatientStore = defineStore({
  id: "patient",
  state: () => ({
    patients: [],
  }),
  actions: {
    setPatients(patients) {
      this.patients = patients;
    },
  },
});
