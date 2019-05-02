<template>
  <div id="app">
    <div id="nav" class="nav">
      <router-link to="/">Music Finder</router-link> |
      <router-link to="/popup">Popup</router-link> |
      <router-link to="/todo">Todo</router-link> |
      <router-link to="/employees">Employees</router-link> |
      <router-link to="/form">Form</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
  .nav {
    margin: 20px;
    text-align: left;
  }
</style>
