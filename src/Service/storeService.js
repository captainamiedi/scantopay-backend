import { Op } from 'sequelize'
import models from '../models/index.js'


const {Store} = models

export const createStore =async (storeObj) => {
    try {
        const storeRes = await Store.create(storeObj)
        return storeRes
    } catch (error) {
        throw error
    }
}

export const updateStoreService = async (storeUpdateObj) => {
    try {
        const storeRes = await Store.update(storeUpdateObj, {
            where: {id: storeUpdateObj.id}
        })

        return storeRes;
    } catch (error) {
       throw error 
    }
}

export const deleteStoreService = async (id) => {
    try {
        const storeRes = await Store.destroy( {
            where: {id}
        })

        return storeRes;
    } catch (error) {
       throw error 
    }
}

export const getAllStoreService = async () => {
    try {
        const storeRes = await Store.findAll()
        return storeRes;
    } catch (error) {
       throw error 
    }
}

export const getAllStoreServiceByState = async (state) => {
    try {
        const storeRes = await Store.findAll({
            where: { state: {
                [Op.iLike]: `%${state}%`
            } }
        })

        return storeRes;
    } catch (error) {
       throw error 
    }
}

export const getAllStoreServiceByName = async (name) => {
    try {
        const storeRes = await Store.findAndCountAll({
            where: { name: {
                [Op.iLike]: `%${name}%`
            } },
            raw: true
        })

        return storeRes;
    } catch (error) {
       throw error 
    }
}