import models from '../models'

const { CartItem } = models

export const createCartItem = async (cartObj) => {
    try {
        const cartRes = await CartItem.create(cartObj)
        return cartRes
    } catch (error) {
        throw error
    }
}

// export const createCartItem = async (cartObj) => {
//     try {
//         const cartRes = await CartItem.create(cartObj)
//         return cartRes
//     } catch (error) {
//         throw error
//     }
// }