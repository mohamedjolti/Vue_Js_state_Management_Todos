<template>
  <div id="app">
    <h1>Hi</h1>
    <router-view></router-view>
     <router-link to="/todos">Todos</router-link>
     <router-link to="/addtodo">Add todo</router-link>
  </div>
</template>

<script>

export default {
  name: 'App', 
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
