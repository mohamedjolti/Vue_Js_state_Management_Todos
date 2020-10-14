<template>
   <div>
        <div >
            <input v-model="allTodos.title">
        </div>
   </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
    data(){
        return {
          todo:{},
          id:0
        }
    },
        computed:mapGetters(['allTodos',"title"]),

  created(){
      this.getTodo(this.$route.params.id);
      this.todo=this.allTodos;

 console.log('The id is: ' + this.$route.params.id);
      
      
  },
  methods:{
      ...mapActions(["getTodo"])
  }
}
</script>

<style>

</style>