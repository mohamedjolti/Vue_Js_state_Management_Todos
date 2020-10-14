import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);
import Todos from "./components/Todos"
import AddTodos from "./components/AddTodo"
import EditTodo from "./components/EditTodo"
import Login from "./components/Login"
export default new VueRouter({
    base: '/',
    //mode: 'history',
    routes: [
        { path: '/todos', component: Todos },
        { path:  '/addtodo',component:AddTodos},
        { path:"/edit/:id",component:EditTodo},
        { path:"/login",component:Login}

    ]
});