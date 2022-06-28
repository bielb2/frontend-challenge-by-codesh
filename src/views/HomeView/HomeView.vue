<script>
import axios from "axios";

import InputText from "primevue/InputText";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Avatar from "primevue/avatar";
import Paginator from "primevue/paginator";
import Skeleton from "primevue/skeleton";
import Dropdown from "primevue/dropdown";

import { delay } from "@/utils/delay";

import { usePatientStore } from "@/stores/patient";

import { mockedData } from "./mockedData";

export default {
  name: "HomeView",
  components: {
    InputText,
    DataTable,
    Column,
    Button,
    Dialog,
    Avatar,
    Paginator,
    Skeleton,
    Dropdown,
  },

  data() {
    return {
      patients: [],
      isFetchingPatients: false,
      modalData: undefined,
      mockedData: mockedData,
      isModalOpen: false,
      gender: [
        { name: "Female", value: "female" },
        { name: "Male", value: "male" },
      ],
      filterData: [
        { name: "Name", value: "name" },
        { name: "Nat", value: "nat" },
      ],
      selectedGender: null,
      selectedFilter: { name: "Name", value: "name" },
      filterValue: "",
    };
  },
  methods: {
    viewUser(data) {
      this.modalData = data;
      this.isModalOpen = true;
    },
    async getUser() {
      try {
        const store = usePatientStore();

        this.isFetchingPatients = true;

        let apiLink = `https://randomuser.me/api/?${
          this.$route.fullPath.split("?")[1]
        }`;

        const res = await axios.get(apiLink);

        if (res.status === 200) {
          await delay();

          this.isFetchingPatients = false;

          if (this.$route.params?.id != null) {
            this.modalData = res.data.results.find((p) => {
              return p.login.uuid === this.$route.params.id;
            });
          }

          store.setPatients(res.data);

          this.patients = res.data;
        } else {
          throw new Error("Check your internet connection");
        }
      } catch (error) {
        this.isFetchingPatients = false;
      }
    },
    onPage($event) {
      const query = {
        ...this.$route.query,
        page: `${$event.page + 1}`,
        results: `${$event.pageCount}`,
      };

      this.$router.push({
        name: "home",
        query,
      });
    },
    onChangeGender($event) {
      const { page, results } = this.$route.query;

      const query = { page, results };
      const value = $event.value.value;

      if (this.$route.query?.gender === value) {
        this.selectedGender = null;
      } else {
        query.gender = value;
      }

      if (this.$route.query[this.selectedFilter.value] != null) {
        query[this.selectedFilter.value] = this.filterValue;
      }

      this.$router.push({
        name: "home",
        query,
      });
    },
    handleFilterValue($event) {
      const timeoutId = window.setTimeout(() => {}, 0);
      for (let id = timeoutId; id >= 0; id -= 1) {
        window.clearTimeout(id);
      }

      setTimeout(() => {
        const query = {
          page: this.$route.query.page,
          results: this.$route.query.results,
          [this.selectedFilter.value]: $event.target.value,
        };

        if (this.$route.query?.gender != null) {
          query.gender = this.$route.query.gender;
        }

        this.$router.replace({
          name: "home",
          query,
        });
      }, 500);
    },
  },
  mounted() {
    const initialRoute = () => {
      const query = { ...this.$route.query, page: "1", results: "50" };

      this.$router.replace({
        name: "home",
        query,
      });
    };

    if (this.$route.query?.page == null) {
      initialRoute();
      return;
    }

    if (this.$route.params?.id != "") {
      this.$router.replace({
        name: "home",
        params: { id: this.$route.params.id },
        query: { page: this.$route.query.page, results: "50" },
      });
    } else {
      initialRoute();
    }
  },
  watch: {
    "$route.query.page": {
      handler: function () {
        this.getUser();
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<template>
  <main class="main mt-8">
    <div class="flex align-center justify-content-center flex-column">
      <div>
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
            placeholder="Search"
            v-model="filterValue"
            @input="handleFilterValue($event)"
          />
          <Dropdown
            v-model="selectedFilter"
            :options="filterData"
            optionLabel="name"
            placeholder="Name"
            class="absolute right-0"
          />
        </span>
      </div>

      <div>
        <DataTable
          removableSort
          :value="patients.results"
          showGridlines
          v-if="!isFetchingPatients"
          responsiveLayout="scroll"
          :rowHover="true"
          dataKey="cell"
          :rows="10"
        >
          <Column field="name.first" sortable header="Name">
            <template #body="slotProps">
              {{ `${slotProps.data.name.first} ${slotProps.data.name.last}` }}
            </template>
          </Column>
          <Column field="gender" header="Gender"></Column>
          <Column field="registered" header="Birth">
            <template #body="slotProps">
              {{
                new Date(slotProps.data.registered.date).toLocaleDateString()
              }}
            </template>
          </Column>
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
          <Paginator
            @page="onPage($event)"
            v-model:first="offset"
            :rows="1"
            :totalRecords="50"
          >
            <template #end>
              <div>
                Página: {{ patients.info?.page }} - Total:
                {{ patients.info?.results }}

                <Dropdown
                  @change="onChangeGender($event)"
                  v-model="selectedGender"
                  :options="gender"
                  optionLabel="name"
                  placeholder="Gender"
                  class="w-8rem"
                />
              </div>
            </template>
          </Paginator>
        </DataTable>

        <DataTable :value="mockedData" v-else responsiveLayout="scroll">
          <template #header>
            <Skeleton></Skeleton>
          </template>
          <Column field="name" header="Name" sortable>
            <template #body>
              <Skeleton></Skeleton>
            </template>
          </Column>
          <Column field="gender" header="Gender">
            <template #body>
              <Skeleton></Skeleton>
            </template>
          </Column>
          <Column field="birth" header="Birth">
            <template #body>
              <Skeleton></Skeleton>
            </template>
          </Column>
          <Column field="actions" header="Actions">
            <template #body>
              <Skeleton></Skeleton>
            </template>
          </Column>
        </DataTable>
      </div>

      <Dialog
        v-model:visible="isModalOpen"
        :style="{ width: '30vw' }"
        :contentStyle="{ overflow: 'unset' }"
        class="styled-dialog surface"
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
            <li>
              <span class="font-bold">Name: </span>
              {{ `${modalData.name.first}${modalData.name.last}` }}
            </li>
            <li>
              <span class="font-bold">Email: </span>
              {{ modalData.email }}
            </li>
            <li>
              <span class="font-bold">Gênero: </span>
              {{ modalData.gender === "female" ? "Feminino" : "Masculino" }}
            </li>
            <li>
              <span class="font-bold">Data de nascimento: </span>
              {{ new Date(modalData.registered.date).toLocaleDateString() }}
            </li>
            <li>
              <span class="font-bold">Telefone: </span>
              {{ modalData.phone }}
            </li>
            <li>
              <span class="font-bold">Nacionalidade: </span>
              {{ modalData.nat }}
            </li>
            <li>
              <span class="font-bold">Endereço: </span>
              {{
                `${modalData.location.street.name} - ${modalData.location.street.number} ${modalData.location.city} - ${modalData.location.state} - ${modalData.location.country}`
              }}
            </li>
            <li v-show="modalData.id.value">
              <span class="font-bold">ID: </span>
              {{ `${modalData.id.name} - ${modalData.id.value}` }}
            </li>
            <li>
              <span class="font-bold">URL: </span>
              <a
                :href="`localhost:3000/home/${modalData.login.uuid}?${
                  this.$route.fullPath.split('?')[1]
                }`"
                class="cursor-pointer ml-1 text-800"
              >
                {{
                  `localhost:3000/home/${modalData.login.uuid}?${
                    this.$route.fullPath.split("?")[1]
                  }`
                }}
              </a>
            </li>
          </ul>
        </div>
      </Dialog>
    </div>
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
