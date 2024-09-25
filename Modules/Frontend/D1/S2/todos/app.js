const app = Vue.createApp({
    data() {
        return {
            message: "My title 2",
            article: "Le cambodge",
            counter: 0,
            jobs: ["Teacher", "Instructor", "Manager", "Supervisor", "CEO"]
        }
    },
    methods: {
        increment() {
            this.counter++
        },
        decrement() {
            this.counter--
        }
    }
});
app.mount('#app');