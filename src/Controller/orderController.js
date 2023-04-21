import { createOrderDetailsService, createOrderItemService, getAllOrderForAUserService, getAllOrdersForAStoreService, getOrderByDate, getOrderItemByIdService, updateOrderPaymentid } from "../Service/orderService";
import { createTransactionService } from "../Service/transactionService";
import { errorResponse, successResponse, successResponseWithData } from "../Utils/response";
import statusCode from "../Utils/statusCode";


export default {
    createOrderDetails: async (req, res) => {
        try {
            const { cart, total, serviceCharge, status, transref, storeId} = req.body
            const cartData = JSON.parse(cart);
            cartData.map(async (item) => {
                const orderItem = {
                    productId: item.id,
                    quantity: item.productQuantity,
                    discount: item.discount,
                    orderId: req.orderData
                }
                await createOrderItemService(orderItem)
            })
            const transactionPayload = {
                total,
                charges: serviceCharge, 
                status: status === 'success' ? 'Successful' : status === 'pending' ? 'Pending' : 'Pending',
                transref, 
                orderId: req.orderData,
                storeId,
                userId: req.userData.id
            }

            const transaction = await createTransactionService(transactionPayload)

            await updateOrderPaymentid(req.orderData, transaction.id)
            return successResponseWithData(res, statusCode.created, 'successfully created!', {orderId: req.orderData})
        } catch (error) {
            console.log(error, 'from controller error');
            return errorResponse(res, error.statusCode || statusCode.serverError, error)
        }
    },
    getOrderItemByOrderId: async (req, res) => {
        try {
            const {id} = req.params
            const orderData = await getOrderItemByIdService(id)
            return successResponseWithData(res, statusCode.success, 'Retrieve successfully', orderData)
        } catch (error) {
            console.log(error, 'from controller error');
            return errorResponse(res, error.statusCode || statusCode.serverError, error) 
        }
    },
    getAllOrderByStoreId: async (req, res) => {
        try {
            const {id} = req.params
            const orderData = await getAllOrdersForAStoreService(id)
            return successResponseWithData(res, statusCode.success, 'Retrieve successfully', orderData)
        } catch (error) {
            console.log(error, 'from controller error');
            return errorResponse(res, error.statusCode || statusCode.serverError, error) 
        }
    },
    getAllOrderByUserId: async (req, res) => {
        try {
            
            const orderData = await getAllOrderForAUserService(req.userData.id)
            return successResponseWithData(res, statusCode.success, 'Retrieve successfully', orderData)
        } catch (error) {
            console.log(error, 'from controller error');
            return errorResponse(res, error.statusCode || statusCode.serverError, error) 
        }
    },

    createCombineOrderAndTransaction: async (req, res) => {
        try {
            const {total, storeId, serviceCharge, status, cart, transref} = req.body
            const orderObj = {
                userId: req.userData.id,
                total, 
                storeId, 
                serviceCharge,
                status
            }


            const orderRes = await createOrderDetailsService(orderObj)
            const cartData = JSON.parse(cart);
            cartData.map(async (item) => {
                const orderItem = {
                    productId: item.id,
                    quantity: item.productQuantity,
                    discount: item.discount,
                    orderId: orderRes.id
                }
                console.log(orderItem, 'orderitem');
                await createOrderItemService(orderItem)
            })
            const transactionPayload = {
                total,
                charges: serviceCharge, 
                status: status === 'success' ? 'Successful' : status === 'pending' ? 'Pending' : 'Pending',
                transref, 
                orderId: orderRes.id,
                storeId,
                userId: req.userData.id
            }
            const transaction = await createTransactionService(transactionPayload)
            return successResponseWithData(res, statusCode.created, 'successfully created!')
        } catch (error) {
            console.log(error, 'error');
            return errorResponse(res, error.statusCode || statusCode.serverError, error) 
        }
    },
    getOrderByDate: async (req, res) => {
        try {
            const {date} = req.params
            const id = req.userData.id
            const orderData = await getOrderByDate(date, id)
            return successResponseWithData(res, statusCode.success, 'Retrieve successfully', orderData)
        } catch (error) {
            console.log(error, 'error');
            return errorResponse(res, error.statusCode || statusCode.serverError, error)     
        }
    }
}