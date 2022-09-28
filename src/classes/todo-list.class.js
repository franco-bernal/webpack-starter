import { Todo } from "./todo.class";

export class TodoList {
    constructor() {
        // this.todos = []
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        let coincidence = false;
        (this.todos).map(function (elem) {
            if (elem.id == id)
                coincidence = true;
        });
        this.guardarLocalStorage();
        console.log((coincidence ? "error al borrar" : "borrado correctamente"));
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }
    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }
    cargarLocalStorage() {
        this.todos = (localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : []);
        this.todos = this.todos.map(Todo.fromJson);
    }
}