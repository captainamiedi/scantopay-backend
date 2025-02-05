import models from '../models/index.js'

const {OrderDetails, OrderItem, Product, User, Store} = models

export const createOrderDetailsService = async (orderObj) => {
    try {
        const orderRes = await OrderDetails.create(orderObj)
        return orderRes
    } catch (error) {
        throw error
    }
}

export const updateOrderPaymentStatus = async (id, status) => {
    try {
        const orderRes = await OrderDetails.update({ status }, {where: {id}})
        return orderRes
    } catch (error) {
        throw error
    }
}

export const updateOrderPaymentid = async (id, paymentId) => {
    try {
        const orderRes = await OrderDetails.update({ paymentId }, {where: {id}})
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

export const getOrderByIdService = async(id) => {
    try {
        const orderRes = await OrderDetails.findAll({
            where: { id},
            order: [
                'createdAt', 'ASC'
            ]
        })
        return orderRes
    } catch (error) {
        throw error
    }
}

export const getAllOrderForAUserService = async(id) => {
    try {
        const orderRes = await OrderDetails.findAndCountAll({
            where: {userId: id},
            include: {
                model: Store,
                as: 'store'
            }
        })
        return orderRes
    } catch (error) {
        throw error
    }
}

export const getAllOrdersForAStoreService = async(id) => {
    try {
        const orderRes = await OrderDetails.findAndCountAll({
            where: {storeId: id},
            include: {
                model: User,
                as: 'user'
            }
        })
        return orderRes
    } catch (error) {
        throw error
    }
}

export const getOrderItemByIdService = async(id) => {
    try {
        const orderRes = await OrderItem.findAll({
            where: {orderId: id},
            include: {
                model: Product,
                as: 'product'
            }
        })
        return orderRes
    } catch (error) {
        throw error
    }
}