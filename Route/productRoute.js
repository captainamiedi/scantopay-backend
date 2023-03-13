import { Router } from "express";
import { getToken, verifyToken } from '../middleware/authMiddleware';
import productController from "../Controller/productController";
import productValidator from "../Validator/productValidator";

const route = Router()
const {createProduct, updateProduct, deleteProduct} = productController
const {validateProduct} = productValidator

route.post('/product', getToken, verifyToken, validateProduct, createProduct)
route.put('/product/:id', getToken, verifyToken, validateProduct, updateProduct)
route.delete('/product/:id', getToken, verifyToken, validateProduct, deleteProduct)


export default route;