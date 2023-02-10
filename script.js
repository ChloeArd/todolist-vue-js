
const todolist = {
    data() {
        return {
            tasks: [],
            newTask: {
                done: false
            },
            errors: []
        }
    },
    methods: {
        addTask:function () {
            this.errors = [];

            if (!this.newTask.name) {
                this.errors.push("Veuillez ajouter une tâche");
                return false;
            }

            this.tasks.push(this.newTask);
            this.newTask = {};
            this.errors = [];

            this.$refs.name.focus();

            // localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
        removeAll: function () {
            if (! confirm('Confirmez vous la suppression')) {
                return false;
            }
            this.tasks = [];
        },
        deleteTask: function (task) {
            if (! confirm('Confirmez vous la suppression')) {
                return false;
            }

            const newTaskList = this.tasks.filter(el => el != task)
            this.tasks = newTaskList;
        }
    },
    created() {
        this.taks = localStorage.getItem('tasks')
        ? JSON.parse(localStorage.getItem('tasks'))
        : this.tasks;
        },
    // Appeler après le montage du composant
    mounted() {
        this.$refs.name.focus();
    },
    updated() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}

Vue.createApp(todolist).mount("#app");