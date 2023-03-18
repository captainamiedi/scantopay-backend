import { Router } from "express";
import { getToken, verifyToken } from '../middleware/authMiddleware.js';
import productController from "../Controller/productController.js";
import productValidator from "../Validator/productValidator.js";

const route = Router()
const {createProduct, updateProduct, deleteProduct, getProductByStore} = productController
const {validateProduct} = productValidator

route.post('/product', getToken, verifyToken, validateProduct, createProduct)
route.put('/product/:id', getToken, verifyToken, validateProduct, updateProduct)
route.delete('/product/:id', getToken, verifyToken, validateProduct, deleteProduct)
route.get('/product/:id', getToken, verifyToken, validateProduct, getProductByStore)


export default route;