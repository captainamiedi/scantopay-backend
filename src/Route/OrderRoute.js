import { Router } from "express";
import { getToken, verifyToken } from '../middleware/authMiddleware.js';
import {createOrder} from '../middleware/createOrder'
import orderController from "../Controller/orderController.js";
import transactionController from "../Controller/transactionController.js";


const route = Router()
const {createOrderDetails, getOrderItemByOrderId, getAllOrderByStoreId, getAllOrderByUserId, createCombineOrderAndTransaction, getOrderByDate} = orderController
const {paystackWebHook, createTransaction } = transactionController

route.post('/order', getToken, verifyToken, createOrder, createOrderDetails)
route.get('/order/item/:id', getToken, verifyToken, getOrderItemByOrderId)
route.get('/order/user', getToken, verifyToken, getAllOrderByUserId)
route.get('/order/store/:id', getToken, verifyToken, getAllOrderByStoreId)
// route.post('/order/transaction', getToken, verifyToken, createTransaction)
route.post('/order/transaction', getToken, verifyToken, createCombineOrderAndTransaction)
route.post('/paystack/webhook/url', paystackWebHook)
route.get('/order/date/:date', getToken, verifyToken, getOrderByDate)

export default route;