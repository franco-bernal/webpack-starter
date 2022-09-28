import './styles.css'
import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo))

// const tarea = new Todo('aprender javascript');
// todoList.nuevoTodo(tarea);

todoList.todos[0].imprimirClase();

console.log(todoList);
// crearTodoHtml(tarea);

