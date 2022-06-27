<script>
import InputText from "primevue/InputText";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Avatar from "primevue/avatar";
import image from "@/assets/img/companyLogo.jpg";

import { usePatientStore } from "@/stores/patient";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    InputText,
    DataTable,
    Column,
    Button,
    Dialog,
    Avatar,
  },
  data() {
    const store = usePatientStore();

    return {
      users: [
        {
          id: "1000",
          code: "f230fh0g3",
          name: "Bamboo Watch",
          description: "Product Description",
          image: "bamboo-watch.jpg",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
          gender: "Female",
          birth: "21/08/11",
        },
        {
          id: "2222",
          code: "f230fh0g3",
          name: "Abc Watch",
          description: "Product Description",
          image: "bamboo-watch.jpg",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
          gender: "Female",
          birth: "11/08/11",
        },
      ],
      id: "",
      modalData: undefined,
      image: image,
    };
  },
  methods: {
    teste() {
      this.msg = "Hello ASDF";
    },
    viewUser(data) {
      this.modalData = data;
    },
    async getUser() {
      try {
        const store = usePatientStore();

        const patients = await axios.get(
          "https://randomuser.me/api/?page=1&results=50"
        );

        store.setPatients(patients.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {},
  mounted() {
    this.getUser();
  },
};
</script>

<template>
  <main class="main mt-8">
    <div class="flex align-center justify-content-center flex-column">
      <div>
        {{ id }}
        <p class="text-900 line-height-3">
          Irure voluptate pariatur proident dolor voluptate ipsum. Est sunt quis
          dolor laborum ea est deserunt reprehenderit proident cillum. Consequat
          officia voluptate quis dolor commodo tempor voluptate labore id duis
          consequat nostrud nisi..
        </p>
      </div>

      <div class="w-full my-4">
        <span class="p-input-icon-right w-full shadow-1">
          <i class="pi pi-search" />
          <InputText
            class="w-full"
            type="text"
            v-model="value3"
            placeholder="Search"
          />
        </span>
      </div>

      <div>
        <DataTable :value="users" showGridlines responsiveLayout="scroll">
          <Column field="name" :sortable="true" header="Name"></Column>
          <Column field="gender" :sortable="true" header="Gender"></Column>
          <Column field="birth" header="Birth"></Column>
          <Column field="actions" header="Actions" :exportable="false">
            <template #body="slotProps">
              <Button
                icon="pi pi-pencil"
                class="p-button-secondary w-full"
                @click="viewUser(slotProps.data)"
                >View</Button
              >
            </template>
          </Column>
        </DataTable>
      </div>

      <Dialog
        v-model:visible="modalData"
        :style="{ width: '30vw' }"
        :contentStyle="{ overflow: 'unset' }"
        class="styled-dialog"
        header=" "
        :draggable="false"
      >
        <div class="flex align-center justify-content-center">
          <Avatar
            alt="User"
            icon="pi pi-user"
            shape="circle"
            size="xlarge"
            class="surface-200 cursor-pointer transition-duration-100 hover:surface-100 text-800 w-7rem h-7rem avatar"
          />
        </div>
        <div>
          <ul class="list-none list">
            <li><span class="font-bold">Nome: </span>Gabriel Barros</li>
            <li>Email: Gabriel Barros</li>
            <li>Gênero: Gabriel Barros</li>
            <li>Data de nascimento: Gabriel Barros</li>
            <li>Telefone: Gabriel Barros</li>
            <li>Nacionalidade: Gabriel Barros</li>
            <li>Endereço: Gabriel Barros</li>
            <li>Id: Gabriel Barros</li>
            <li>URL: Gabriel Barros</li>
          </ul>
        </div>
      </Dialog>
    </div>
    <!-- <Button
      icon="pi pi-check"
      iconPos="right"
      label="Primary"
      class="p-button-secondary"
      @click="teste"
      >{{ msg }}</Button
    >

    <ul>
      <li v-for="technology in front_end" :key="technology">
        {{ technology }}
      </li>
    </ul>
    <ul>
      <li v-for="technology in backend" :key="technology.id">
        {{ technology.language }}
      </li>
    </ul>

    <HelloWorld compEmail="asad@asd.com" :isOpen="false" /> -->
    <!-- <HelloWorld :compEmail="msg" /> -->

    <!-- <form @submit="asdf($event)"> -->
    <!-- <form @submit.prevent="asdf"> -->
    <!-- <input type="text" v-model="msg" /> -->
    <!-- <button @click="one(txt, $event), second(txt2, $event)" v-show="disabled">  -->
  </main>
</template>

<style scoped>
.main {
  max-width: 720px;
  margin: 0 auto;
}

.avatar {
  margin-top: -8rem;
}

.list > li:not(:last-child) {
  margin-bottom: 10px;
}
</style>
