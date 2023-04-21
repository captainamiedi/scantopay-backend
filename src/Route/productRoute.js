import { Router } from "express";
import { getToken, verifyToken } from '../middleware/authMiddleware.js';
import productController from "../Controller/productController.js";
import productValidator from "../Validator/productValidator.js";
import uploadImage from "../middleware/ImageUpload.js";
const multer  = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });

const upload = multer({ storage: storage });

const route = Router()
const {createProduct, updateProduct, deleteProduct, getProductByStore, createProductWithImage, createProductWithExcel} = productController
const {validateProduct} = productValidator

route.post('/product', getToken, verifyToken, validateProduct, createProduct)
route.put('/product/:id', getToken, verifyToken, updateProduct)
route.delete('/product/:id', getToken, verifyToken, deleteProduct)
route.get('/product/:id', getToken, verifyToken, getProductByStore)
route.post('/product/create',getToken, verifyToken, uploadImage.array('image', 5), createProductWithImage)
route.post('/product/excel/upload',getToken, verifyToken, upload.single('upload'), createProductWithExcel)


export default route;