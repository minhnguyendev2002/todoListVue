<script setup>
  import { RouterView } from 'vue-router';
  import Sidebar from "./components/sideBar/sideBar.vue";
</script>

<template>
  <div class="dark-theme">
    <Sidebar />
    <div class="content d-flex align-items-center justify-content-center ms-auto">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
  @import "./assets/base.css";
  .content {
    width: calc(100% - 300px);
    padding: 100px 0px;
  }
</style>