import models from '../models/index.js'

const {OrderDetails, OrderItem} = models

export const createOrderDetailsService = async (orderObj) => {
    try {
        const orderRes = await OrderDetails.create(orderObj)
        return orderRes
    } catch (error) {
        throw error
    }
}

export const createOrderItemService = async (orderObj) => {
    try {
        const orderRes = await OrderItem.create(orderObj)
        return orderRes
    } catch (error) {
        throw error
    }
}