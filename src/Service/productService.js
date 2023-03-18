import models from '../models/index.js'

const {Product} = models


export const createProductService = async (productObj) => {
    try {
        const productRes = await Product.create(productObj)
        return productRes
    } catch (error) {
        throw error
    }
}

export const updateProductService = async (productObj) => {
    try {
        const productRes = await Product.update(productObj, {
            where: {id: productObj.id}
        })
        return productRes
    } catch (error) {
        throw error
    }
}

export const deleteProductService = async (id) => {
    try {
        const productRes = await Product.destroy({
            where: {id}
        })
        return productRes
    } catch (error) {
        throw error
    }
}

export const getProductByStore = async (id) => {
    try {
        const productRes = await Product.findAll({
            where: {storeId: id}
        })
        return productRes
    } catch (error) {
        console.log(error, 'error');
        throw error
    }
}

