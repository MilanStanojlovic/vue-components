<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <app-server v-for="server in servers" :key="server.id" :server="server"></app-server>
      </ul>
    </div>
    <div class="col-xs-12 col-sm-6">
      <p v-if="!selectedServer">Please select a server!</p>
      <p v-else>Selected server #{{selectedServer.id}}, status: {{selectedServer.status}}</p>
      <button v-if="selectedServer" @click="changeStatus">Change status</button>
    </div>
  </div>
</template>
<script>
import Server from "./Server.vue";
import { eventBus } from "../main";

export default {
  components: {
    "app-server": Server
  },

  data: () => {
    return {
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Critical" },
        { id: 3, status: "Unknown" },
        { id: 4, status: "Normal" }
      ],
      selectedServer: undefined
    };
  },

  methods: {
    changeStatus() {
      this.selectedServer.status = "Normal";
    }
  },

  created() {
    eventBus.$on("serverSelected", selectedServer => {
      this.selectedServer = selectedServer;
    });
  }
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>