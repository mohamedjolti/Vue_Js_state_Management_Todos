import axios from "axios"


const state={
  todos:[
      {id:1 ,title:"todo 1"},
      {id:2 ,title:"todo 2"}
  ],
  title:"TodoApp",
  selectedTodo:{}


};

const getters={
  allTodos:state=>state.todos,
  title:state=>state.title,

};

const actions={
  async fetchTodos({ commit }){
      const response=await axios.get("https://jsonplaceholder.typicode.com/todos");
     

      commit("setTodos",response.data);
      
       
  },
  async addTodo({commit},title){
      const response= await axios.post("https://jsonplaceholder.typicode.com/todos",{title,completed:false});
        commit("newTodo",response.data);
        console.log(response.data);
        
  },
  async deleteTodo({commit},id){
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    console.log(id);
    
    commit("removeTodo",id);
    
  },
  async filterTodos({commit},e){
    const number=parseInt(e.target.options[e.target.options.selectedIndex].innerText);
    console.log(number);
    
    const response=await axios.get(`https://jsonplaceholder.typicode.com/todos/?_limit=${number}`);
    commit("setTodos",response.data);
  },
  async getTodo ({commit},id){
    const response=await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit("setTodos",response.data);
    console.log(response.data.title)
  }


};

 

const mutations={
  setTodos:(state,todos)=>(state.todos=todos),
  newTodo:(state,todo)=>state.todos.unshift(todo),
  removeTodo:(state,id)=>state.todos=state.todos.filter(todo=> todo.id!==id),

};

export default {
    state,getters,actions,mutations
}
