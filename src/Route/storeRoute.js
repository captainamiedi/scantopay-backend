import { Router } from 'express';
import storeController from '../Controller/storeController.js';
import { getToken, verifyToken } from '../middleware/authMiddleware.js';
import storeValidator from '../Validator/storeValidator.js';

const route = Router();
const {createStore, updateStore, getAllStoresByName, getAllStoresByState, deleteStore, getAllStores} = storeController
const {validateStore} = storeValidator

route.post('/store', getToken, verifyToken, validateStore, createStore)
route.put('/store/:id', getToken, verifyToken, updateStore)
route.delete('/store/:id', getToken, verifyToken, deleteStore)
route.get('/store/byState/:state', getToken, verifyToken, getAllStoresByState)
route.get('/store/byName/:name', getToken, verifyToken, getAllStoresByName)
route.get('/store', getToken, verifyToken, getAllStores)


export default route;