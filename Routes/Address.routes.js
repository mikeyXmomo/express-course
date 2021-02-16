import express from 'express';
import addressBookController from '../Controller/AddressBook.controller';

const addressBookRouter = express.Router();

addressBookRouter.get('/addresses', addressBookController.getAll);

addressBookRouter.post('/address/create', addressBookController.create);

addressBookRouter.get('/address/:id', addressBookController.findById);

addressBookRouter.put('/address/:id', addressBookController.updateAddressBook);

addressBookRouter.delete('/address/:id', addressBookController.deleteAddressBook);

export { addressBookRouter };
