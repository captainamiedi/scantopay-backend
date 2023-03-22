import { Router } from "express";
import { getToken, verifyToken } from '../middleware/authMiddleware.js';
import {createOrder} from '../middleware/createOrder'
import orderController from "../Controller/orderController.js";


const route = Router()
const {createOrderDetails} = orderController

route.post('/order', getToken, verifyToken, createOrder, createOrderDetails)

export default route;