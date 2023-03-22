import { createOrderItemService } from "../Service/orderService";
import { errorResponse, successResponse } from "../Utils/response";
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
    }
}