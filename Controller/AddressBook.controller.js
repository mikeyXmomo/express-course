import { v4 as uuidv4 } from 'uuid';
import { AddressBook } from '../Schema/Address.schema';

const addressBookController = {};

addressBookController.getAll = async (req, res) => {
	try {
		const allAddress = await AddressBook.find().exec();
		return res.json(allAddress);
	} catch (error) {
		console.log(error);
	}
};

addressBookController.create = async (req, res) => {
	const { firstName, lastName, phone, email, address } = req.body;
	console.log(title, completed);
	try {
		const newAddress = await AddressBook.create({
			id: uuidv4(),
			firstName,
			lastName,
			phone,
			email,
			address,
			createdAt: Date.now(),
			updatedAt: Date.now()
		});

		return res.status(200).send(newAddress);
	} catch (error) {
		console.log(error);
	}
};

addressBookController.findById = async (req, res) => {
	const { id } = req.params;
	try {
		const addressById = await AddressBook.find({ id }).exec();

		return res.json(addressById);
	} catch (error) {
		console.log(error);
	}
};

addressBookController.updateAddressBook = async (req, res) => {
	const { id } = req.params;
	const { firstName, lastName, phone, email, address } = req.body;

	try {
		const updateAddress = await AddressBook.findOneAndUpdate(
			{ id },
			{
				firstName,
				lastName,
				phone,
				email,
				address,
				createdAt: Date.now(),
				updatedAt: Date.now()
			}
		);

		return res.json(updateAddress);
	} catch (error) {
		console.log(error);
	}
};

addressBookController.deleteAddressBook = async (req, res) => {
	const { id } = req.params;

	try {
		await AddressBook.findOneAndDelete({ id });

		return res.status(200).send();
	} catch (error) {}
};

export default addressBookController;
