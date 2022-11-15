const express=require('express')
const router=express.Router();
const {ProductData,getProductData,updataData,deleteData}=require('../controller/productMangementController')
router.post('/ProductData',ProductData);
router.get('/getProductData',getProductData)
router.post('/updataData',updataData)
router.delete('/deleteData',deleteData)
module.exports=router