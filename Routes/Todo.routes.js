import express from 'express';
import todoController from '../Controller/Todo.controller';

const todoRouter = express.Router();

todoRouter.get('/todos', todoController.getAll);

todoRouter.post('/todo/create', todoController.create);

todoRouter.get('/todo/:id', todoController.findById);

todoRouter.put('/todo/:id', todoController.updateTodo);

todoRouter.delete('/todo/:id', todoController.deleteTodo);

export { todoRouter };
