import { createOrderItemService, getAllOrderForAUserService, getAllOrdersForAStoreService, getOrderItemByIdService } from "../Service/orderService";
import { errorResponse, successResponse, successResponseWithData } from "../Utils/response";
import statusCode from "../Utils/statusCode";


export default {
    createOrderDetails: async (req, res) => {
        try {
            const { cart} = req.body
            const cartData = JSON.parse(cart);
            cartData.map(async (item) => {
                const orderItem = {
                    productId: item.productId,
                    quantity: item.quantity,
                    discount: item.discount,
                    orderId: req.orderData
                }
                await createOrderItemService(orderItem)
            })

            return successResponse(res, statusCode.created, 'successfully created!')
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