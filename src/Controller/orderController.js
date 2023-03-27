import { createOrderItemService, getAllOrderForAUserService, getAllOrdersForAStoreService, getOrderItemByIdService, updateOrderPaymentid } from "../Service/orderService";
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
                    productId: item.productId,
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
}