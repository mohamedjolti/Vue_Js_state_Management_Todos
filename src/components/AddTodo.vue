<template>
   <form action="">
       <div class="form-groupe">
           <label for="todo">Add todo</label>
           <input v-model="title" type="text" class="form-group" id="todo">
           <div @click="onSubmit" class="btn btn-primary">Add</div>
       </div>
   </form>
</template>

<script>
import {mapActions} from "vuex"
export default {
 methods:{
      ...mapActions(["addTodo"]),
      onSubmit(){
          console.log("heloow ");
          
          this.addTodo(this.title);
          this.title=""
      }
 },
 data(){
     return{
         title:""
     }
 }

}
</script>

<style>

</style>