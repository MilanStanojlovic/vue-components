<template>
  <div>
    <li
      class="list-group-item"
      @click="serverSelected"
      style="cursor: pointer"
    >Server #{{ server.id }}</li>
  </div>
</template>
<script>
import { eventBus } from "../main";

export default {
  props: ["server"],
  methods: {
    serverSelected() {
      eventBus.$emit("serverSelected", this.server);
    }
  }
};
</script>
<style scoped>
div {
  border: 1px solid red;
}
</style>