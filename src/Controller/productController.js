import { createProductService, deleteProductService, getProductByStore, updateProductService } from "../Service/productService.js"
import { errorResponse, successResponse, successResponseWithData } from "../Utils/response.js"
import statusCode from "../Utils/statusCode.js"
import XLSX from 'xlsx'
import fs from 'fs'

export default {
    createProduct: async (req, res) => {
        try {
            const {name, image, price, quantity, productcode, storeId} = req.body
            const productObj = {
                name,
                image,
                price, 
                quantity, 
                productcode,
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
            const {name, image, price, quality, productcode, storeId} = req.body
            const productObj = {
                name,
                image,
                price, 
                quality, 
                productcode,
                storeId,
                id
            }

            const product = await updateProductService(productObj)

            return successResponse(res, statusCode.success, 'Product updated successfully')
        } catch (error) {
            console.log(error);
            return errorResponse(res, error.statusCode || statusCode.serverError, error)
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const {id} = req.params;

            const product = await deleteProductService(id)

            return successResponse(res, statusCode.success, 'Product deleted successfully')
        } catch (error) {
            return errorResponse(res, error.statusCode || statusCode.serverError, error)
        }
    },
    getProductByStore: async (req, res) => {
        try {
            const {id} = req.params;

            const products = await getProductByStore(id)

            return successResponseWithData(res, statusCode.success, 'Product retrieved successfully', products)
        } catch (error) {
            return errorResponse(res, error.statusCode || statusCode.serverError, error)
        }
    },
    createProductWithImage: async (req, res) => {
        try {
            if(req.files) {
                let data = []
                for (let index = 0; index < req.files.length; index++) {
                    data.push(req.files[index].location)
                    
                }
                const {name, price, quantity, productcode, storeId} = req.body
                const productObj = {
                    name,
                    image: req.files[0].location,
                    price, 
                    quantity, 
                    productcode,
                    storeId,
                    multipleImg: data
                }
                // console.log(productObj, 'react');
    
                const product = await createProductService(productObj)
    
                return successResponse(res, statusCode.created, 'Product created successfully')
            }
        } catch (error) {
            return errorResponse(res, error.statusCode || statusCode.serverError, error)
        }
    },
    createProductWithExcel : async (req, res) =>{
        try {
            let path = req.file.path;
            console.log(path);
            var workbook = XLSX.readFile(path);
            // console.log(workbook, 'workbook');
            var sheet_name_list = workbook.SheetNames;
            let jsonData = XLSX.utils.sheet_to_json(
              workbook.Sheets[sheet_name_list[0]]
            );
            if (jsonData.length === 0) {
              return errorResponse(res, statusCode.badRequest, "xml sheet has no data")
            }

            jsonData.map(async (item) => {
                const payload = {
                    name: item['Product Name'],
                    image: item['Image'],
                    price: item['Unit Price'], 
                    quantity: item['Quantity'], 
                    productcode: item['BarCode'],
                    storeId: req.body.storeId
                }
                const product = await createProductService(payload)

            })
            fs.unlinkSync(path)
            return successResponse(res, statusCode.created, 'Product created successfully')
              
        } catch (error) {
            return errorResponse(res, error.statusCode || statusCode.serverError, error) 
        }
    },
}