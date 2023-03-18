import { createProductService, deleteProductService, getProductByStore, updateProductService } from "../Service/productService.js"
import { errorResponse, successResponse, successResponseWithData } from "../Utils/response.js"
import statusCode from "../Utils/statusCode.js"

export default {
    createProduct: async (req, res) => {
        try {
            const {name, image, price, quantity, productCode, storeId} = req.body
            const productObj = {
                name,
                image,
                price, 
                quantity, 
                productCode,
                storeId
            }

            const product = await createProductService(productObj)

            return successResponse(res, statusCode.created, 'Product created successfully')
        } catch (error) {
            return errorResponse(res, error.statusCode || statusCode.serverError, error)
        }
    },
    updateProduct: async (req, res) => {
        try {
            const {id} = req.params;
            const {name, image, price, quality, productCode, storeId} = req.body
            const productObj = {
                name,
                image,
                price, 
                quality, 
                productCode,
                storeId,
                id
            }

            const product = await updateProductService(productObj)

            return successResponse(res, statusCode.success, 'Product created successfully')
        } catch (error) {
            return errorResponse(res, error.statusCode || statusCode.serverError, error)
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const {id} = req.params;

            const product = await deleteProductService(id)

            return successResponse(res, statusCode.success, 'Product created successfully')
        } catch (error) {
            return errorResponse(res, error.statusCode || statusCode.serverError, error)
        }
    },
    getProductByStore: async (req, res) => {
        try {
            const {id} = req.params;

            const products = await getProductByStore(id)

            return successResponseWithData(res, statusCode.success, 'Product created successfully', products)
        } catch (error) {
            return errorResponse(res, error.statusCode || statusCode.serverError, error)
        }
    },
}