import { createOrderDetailsService } from "../Service/orderService";

export const createOrder =async (req, res, next) => {
    const {total, storeId, serviceCharge, status } = req.body
    const orderObj = {
        userId: req.userData.id,
        total, 
        storeId, 
        serviceCharge,
        status
    }

    const orderRes = await createOrderDetailsService(orderObj)
    // console.log(orderRes, 'resp');
    req.orderData = orderRes.id

    return next()
}