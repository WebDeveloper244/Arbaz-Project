const express=require('express')
const router=express.Router();
const {ProductData}=require('../controller/productMangementController')
router.post('/ProductData',ProductData);

module.exports=router