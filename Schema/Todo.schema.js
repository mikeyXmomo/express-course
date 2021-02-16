import mongoose from 'mongoose';
const todoSchema = mongoose.Schema({
	id: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean,
		required: true
	},
	createdAt: {
		type: Date,
		required: true
	},
	updatedAt: {
		type: Date,
		required: true
	}
});

export const Todo = mongoose.model('todo', todoSchema);
