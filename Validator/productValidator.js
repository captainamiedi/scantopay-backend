import { errorResponse } from "../Utils/response";
import statusCode from "../Utils/statusCode";


export default {
    validateProduct: (req, res, next) => {
        const {name, price, storeId} = req.body

        if (!name || !name.trim()) {
            return errorResponse(res, statusCode.badRequest, 'Name is Required')
        }
        if (!price || !price.trim()) {
            return errorResponse(res, statusCode.badRequest, 'Price is Required')
        }
        if (!storeId || !storeId.trim()) {
            return errorResponse(res, statusCode.badRequest, 'store id is Required')
        }
        return next()
    }
}