<template>
    <div class="sidebar bg-gray-800 text-white w-64 h-full p-5">
      <ul>
        <li class="mb-4">
          <router-link to="/" class="text-white no-underline">Home</router-link>
        </li>
        <li class="mb-4">
          <router-link to="/about" class="text-white no-underline">About</router-link>
        </li>
        <li class="mb-4">
          <a href="#" class="text-white no-underline">Services</a>
        </li>
        <li class="mb-4">
          <a href="#" class="text-white no-underline">Contact</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'Sidebar',
  };
  </script>
  
  <style scoped>
  .sidebar {
    height: 100vh; 
  }
  
  .sidebar a,
  .sidebar .router-link-active {
    color: inherit; 
    text-decoration: none; 
  }
  
  .sidebar a:hover,
  .sidebar .router-link-active:hover {
    text-decoration: underline; 
  }
  
  .sidebar a {
    display: block; 
    padding: 10px 0; 
  }
  </style>
  