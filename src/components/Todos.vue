<template>
  <div class="container">
                          <h3 class="text-center bg-info">{{title}}</h3>
      <FilterTodos/>
      <AddTodo/>
         <div v-bind:key="todo.id" v-for="todo in allTodos">

                    <div class="col-lg-4">
                        <h3>{{todo.title}}</h3>
                    </div>
                    <button @click="deleteTodo(todo.id)" class="btn btn-danger">delete</button>
                      <router-link v-bind:to="'/edit/'+todo.id" class="btn btn-primary">view todo</router-link>
                      <router-link to="/addtodo">Add todo</router-link>
                                            <router-link to="/login">login</router-link>

          </div>
      

  </div>
</template>

<script>
import AddTodo from "./AddTodo"
import {mapGetters,mapActions} from "vuex" 
import FilterTodos from "./FilterTodos"
export default {
    components:{
        AddTodo ,
        FilterTodos
    }, 
    name:"todo",
    computed:mapGetters(['allTodos',"title"])
    ,
    data(){
        return {
            todos:[]
        } 
    },
    methods: { 
        ...mapActions(["fetchTodos","deleteTodo"]),
   


    },
    created(){ 
        this.fetchTodos();
    }

}
</script>

<style>

</style>
