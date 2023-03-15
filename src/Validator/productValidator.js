import { errorResponse } from "../Utils/response.js";
import statusCode from "../Utils/statusCode.js";


export default {
    validateProduct: (req, res, next) => {
        const {name, price, storeId} = req.body

        if (!name || !name.trim()) {
            return errorResponse(res, statusCode.badRequest, 'Name is Required')
        }
        if (!price) {
            return errorResponse(res, statusCode.badRequest, 'Price is Required')
        }
        if (!storeId || !storeId.trim()) {
            return errorResponse(res, statusCode.badRequest, 'store id is Required')
        }
        return next()
    }
}