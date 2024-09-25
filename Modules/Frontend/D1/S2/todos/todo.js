const app = Vue.createApp({
    data() {
        return {
            newTodo: "",
            todos: []
        }
    },
    methods: {
        addTodo() {
            this.todos.push(this.newTodo)
            this.newTodo = ""
            console.log(this.todos)
        },
        completeTodo(index) {
            // add strikethroguh to HTML
            this.todos.splice(index, 1)
        },
        deleteTodo(index) {
            this.todos.splice(index, 1)
        }
    }
});
app.mount('#app');