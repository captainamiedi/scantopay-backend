import { Router } from "express";
import { getToken, verifyToken } from '../middleware/authMiddleware.js';
import {createOrder} from '../middleware/createOrder'
import orderController from "../Controller/orderController.js";


const route = Router()
const {createOrderDetails, getOrderItemByOrderId, getAllOrderByStoreId, getAllOrderByUserId} = orderController

route.post('/order', getToken, verifyToken, createOrder, createOrderDetails)
route.get('/order/item/:id', getToken, verifyToken, getOrderItemByOrderId)
route.get('/order/user', getToken, verifyToken, getAllOrderByUserId)
route.get('/order/store/:id', getToken, verifyToken, getAllOrderByStoreId)

export default route;