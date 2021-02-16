import mongoose from 'mongoose';

const addressBookSchema = mongoose.Schema({
	id: {
		type: String,
		required: true
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	phone: {
		type: Number,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	address: {
		type: String,
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

export const AddressBook = mongoose.model('AddressBook', addressBookSchema);
