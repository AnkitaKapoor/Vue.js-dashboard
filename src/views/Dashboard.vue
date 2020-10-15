<template>
  <div class="dashboard">
    <h1 class="mx-10 my-10">Dashboard</h1>
    <v-container class="my-10">
      <v-card>
        <v-card-title>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-select :items="['Ankita', 'Bilawal', 'Ignacio', 'nelson']">
            <template v-slot:item="{ item, attrs, on }">
              <v-list-item v-bind="attrs" v-on="on">
                <v-list-item-title :id="attrs['aria-labelledby']" v-text="item"></v-list-item-title>
              </v-list-item>
            </template>
          </v-select>
        </v-card-title>

        <v-card-title>
          Search Specific Client
          <v-spacer></v-spacer>
          <v-text-field v-model="search" label="Search" single-line hide-details loading></v-text-field>
        </v-card-title>

        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="clientsName"
          :items-per-page="5"
          :single-select="singleSelect"
          item-key="client"
          show-select
          :search="search"
          class="elevation-16"
        >
          <template v-slot:top>
            <v-switch v-model="singleSelect" label="Select Single Client" class="pa-6"></v-switch>
          </template>

          <template v-slot:item.gc="{ item }">
            <v-chip :color="getColor(item.gc)" dark>{{ item.gc }}</v-chip>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: "Clients (WME)",
          align: "left",
          sortable: false,
          value: "client"
        },
        { text: "GC", value: "gc" },
        { text: "SC", value: "sc" },
        { text: "GMB", value: "gmb" },
        { text: "FB", value: "fb" },
        { text: "AD", value: "ad" }
      ],
      clientsName: [
        {
          client: "A",
          gc: 159,
          sc: 6.0,
          gmb: 24,
          fb: 4.0,
          ad: "1%"
        },
        {
          client: "B",
          gc: 237,
          sc: 9.0,
          gmb: 37,
          fb: 4.3,
          ad: "1%"
        },
        {
          client: "C",
          gc: 262,
          sc: 16.0,
          gmb: 23,
          fb: 6.0,
          ad: "7%"
        },
        {
          client: "D",
          gc: 305,
          sc: 3.7,
          gmb: 67,
          fb: 4.3,
          ad: "8%"
        },
        {
          client: "E",
          gc: 356,
          sc: 16.0,
          gmb: 49,
          fb: 3.9,
          ad: "16%"
        },
        {
          client: "F",
          gc: 375,
          sc: 0.0,
          gmb: 94,
          fb: 0.0,
          ad: "0%"
        },
        {
          client: "G",
          gc: 392,
          sc: 0.2,
          gmb: 98,
          fb: 0,
          ad: "2%"
        },
        {
          client: "H",
          gc: 408,
          sc: 3.2,
          gmb: 87,
          fb: 6.5,
          ad: "45%"
        },
        {
          client: "I",
          gc: 452,
          sc: 25.0,
          gmb: 51,
          fb: 4.9,
          ad: "22%"
        },
        {
          client: "J",
          gc: 518,
          sc: 26.0,
          gmb: 65,
          fb: 7,
          ad: "6%"
        }
      ]
    };
  },
  methods: {
    getColor(gc) {
      if (gc < 200) return "red";
      else if (gc < 300 && gc > 200) return "orange";
      else return "green";
    }
  }
};
</script>