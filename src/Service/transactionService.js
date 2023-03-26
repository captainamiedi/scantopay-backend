import models from '../models/index.js'


const {Transaction, OrderDetails} = models

export const createTransactionService = async (transactionObj) => {
    try {
        const transactionRes = await Transaction.create(transactionObj)
        return transactionRes
    } catch (error) {
      throw error  
    }
}

export const getTransactionService = async (id) => {
    try {
        const transactionRes = await Transaction.findAll({
          where: {id: id}
        })
        return transactionRes
    } catch (error) {
      throw error  
    }
}

export const getTransactionForUser = async (id) => {
  try {
    const transactionRes = await Transaction.findAll({
      where: {userId: id},
      include: {
        model: OrderDetails,
        as: 'order'
      }
    })
    return transactionRes
  } catch (error) {
    throw error
  }
}
