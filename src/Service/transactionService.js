import models from '../models/index.js'


const {Transaction} = models

export const createTransactionService = async (transactionObj) => {
    try {
        const transactionRes = await Transaction.create(transactionObj)
        return transactionRes
    } catch (error) {
      throw error  
    }
}