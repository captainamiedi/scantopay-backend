import { createOrderDetailsService } from "../Service/orderService";

export const createOrder =async (req, res, next) => {
    const {total, storeId, serviceCharge } = req.body
    const orderObj = {
        userId: req.userData.id,
        total, 
        storeId, 
        serviceCharge
    }

    const orderRes = await createOrderDetailsService(orderObj)
    console.log(orderRes.id, 'resp1111');
    console.log(orderRes.OrderDetails, 'resp');
    // console.log(orderRes, 'resp');
    req.orderData = orderRes.id

    return next()
}