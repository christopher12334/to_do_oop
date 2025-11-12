import { Todo } from '../models/todo.js';
const todos = [];
export const createTodo = (req, res, next) => {
    try {
        const task = req.body.task;
        const newTodo = new Todo(Math.random().toString(), task);
        todos.push(newTodo);
        res.status(201).json({
            message: 'created new task',
            createdTask: task
        });
    }
    catch (error) {
        console.log(error);
    }
};
export const getTodos = (req, res, next) => {
    try {
        res.status(201).json({
            tasks: todos
        });
    }
    catch (error) {
        console.log(error);
    }
};
export const updateTodo = (req, res, next) => {
    try {
        const todoId = req.params.id;
        const updatedTask = req.body.task;
        const todoIndex = todos.findIndex(todo => todo.id === todoId);
        if (todoIndex < 0) {
            throw new Error('could not find todo bassed on id');
        }
        todos[todoIndex] = new Todo(todos[todoIndex].id, updatedTask);
        res.status(201).json({
            message: 'Todo updated',
            Todo: updateTodo
        });
    }
    catch (error) {
        console.log(error);
    }
};
export const deleteTodo = (req, res, next) => {
    try {
        const todoId = req.params.id;
        const todoIndex = todos.findIndex(todo => todo.id === todoId);
        if (todoIndex < 0) {
            throw new Error('could not find todo bassed on id');
        }
        todos.splice(todoIndex, 1);
        res.status(201).json({
            message: "Todo deleted"
        });
    }
    catch (error) {
        console.log(error);
    }
};
//# sourceMappingURL=todos.js.map