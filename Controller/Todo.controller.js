import { Todo } from '../Schema/Todo.schema';
import { v4 as uuidv4 } from 'uuid';

const todoController = {};

todoController.getAll = async (req, res) => {
	try {
		const allTodos = await Todo.find().exec();
		return res.json(allTodos);
	} catch (error) {
		console.log(error);
		tile;
	}
};

todoController.create = async (req, res) => {
	const { title, completed } = req.body;
	console.log(title, completed);
	try {
		const newTodo = await Todo.create({
			id: uuidv4(),
			title,
			completed,
			createdAt: Date.now(),
			updatedAt: Date.now()
		});

		return res.status(200).send(newTodo);
	} catch (error) {
		console.log(error);
	}
};

todoController.findById = async (req, res) => {
	const { id } = req.params;
	try {
		const todoById = await Todo.find({ id }).exec();

		return res.json(todoById);
	} catch (error) {
		console.log(error);
	}
};

todoController.updateTodo = async (req, res) => {
	const { id } = req.params;

	try {
		const updateTodo = await Todo.findOneAndUpdate({ id }, { completed: true });

		return res.json(updateTodo);
	} catch (error) {
		console.log(error);
	}
};

todoController.deleteTodo = async (req, res) => {
	const { id } = req.params;

	try {
		await Todo.findOneAndDelete({ id });

		return res.status(200).send();
	} catch (error) {}
};

export default todoController;
