<template>
    <div id="app">
      <sidebar />
      <div class="main-content">
        <router-view />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import sidebar from './components/sidebar.vue';
  
  export default {
    name: 'App',
    components: {
      sidebar,
    },
  };
  </script>
  
  <style scoped>
  #app {
    display: flex;
  }
  
  .main-content {
    flex-grow: 1;
    padding: 20px;
  }
  </style>
  