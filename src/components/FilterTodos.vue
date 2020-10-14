<template>
  <div>
      <h2>Filter Todos</h2>
      <select @change="filterTodos($event)">
          <option value="200">200 todos</option>
           <option value="100">100 todos</option>
            <option value="50">50 todos</option>
            <option value="5">5 todos</option>
      </select>
  </div>


</template>

<script>
import {mapActions}  from "vuex"
export default {
  
 methods:{
     ...mapActions(["filterTodos"])
 }

}
</script>

<style>

</style>