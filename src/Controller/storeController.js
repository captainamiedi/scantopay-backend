import { createStore, deleteStoreService, getAllStoreService, getAllStoreServiceByName, getAllStoreServiceByState, updateStoreService } from "../Service/storeService.js";
import { errorResponse, successResponse, successResponseWithData } from "../Utils/response.js";
import statusCode from "../Utils/statusCode.js";

export default {
    createStore: async (req, res) => {
        try {
            const {name, image, description, discount, contactEmail, phoneNumber, address, state} = req.body;
            const storeObj = {
                name,
                image, 
                description,
                discount,
                contactEmail,
                phoneNumber,
                address,
                state
            }

            const store = await createStore(storeObj)

            return successResponseWithData(res, statusCode.created, 'Store Created', store)
        } catch (error) {
            console.log(error);
            return errorResponse(res, error.statusCode || statusCode.serverError, error)
        }
    },
    updateStore: async (req, res) => {
        try {
            const {id} = req.params
            const {name, image, description, discount, contactEmail, phoneNumber, address, state} = req.body;
            const storeObj = {
                name,
                image, 
                description,
                discount,
                contactEmail,
                phoneNumber,
                address,
                state,
                id
            }

            const store = await updateStoreService(storeObj)

            return successResponseWithData(res, statusCode.success, 'Store Update', store)
        } catch (error) {
          return errorResponse(res, error.statusCode|| statusCode.serverError, error) 
        }
    },
    deleteStore: async (req, res) => {
        try {
            const {id} = req.params;
            await deleteStoreService(id)

            return successResponse(res, statusCode.success, 'Delete Successful')
        } catch (error) {
            return errorResponse(res, error.statusCode|| statusCode.serverError, error)  
        }
    },
    getAllStores: async (req, res) => {
        try {
            const stores = await getAllStoreService()

            return successResponseWithData(res, statusCode.success, 'Stores Successfully Retrieved', stores)
        } catch (error) {
            console.log(error);
            return errorResponse(res, error.statusCode|| statusCode.serverError, error)  
        }
    },
    getAllStoresByState: async (req, res) => {
        try {
            const {state} = req.params 
            const stores = await getAllStoreServiceByState(state)

            return successResponseWithData(res, statusCode.success, 'Stores Successfully Retrieved', stores)
        } catch (error) {
            return errorResponse(res, error.statusCode|| statusCode.serverError, error)  
        }
    },
    getAllStoresByName: async (req, res) => {
        try {
            const {name} = req.params 
            const stores = await getAllStoreServiceByName(name)

            return successResponseWithData(res, statusCode.success, 'Stores Successfully Retrieved', stores)
        } catch (error) {
            console.log(error, 'error');
            return errorResponse(res, error.statusCode|| statusCode.serverError, error)  
        }
    },
    createStoreWithImage: async (req, res) => {
        try {
            const {name, image, description, discount, contactEmail, phoneNumber, address, state} = req.body;
            const storeObj = {
                name,
                image: req.file, 
                description,
                discount,
                contactEmail,
                phoneNumber,
                address,
                state
            }

            const store = await createStore(storeObj)

            return successResponseWithData(res, statusCode.created, 'Store Created', store)
        } catch (error) {
            console.log(error);
            return errorResponse(res, error.statusCode || statusCode.serverError, error)
        }
    },
}