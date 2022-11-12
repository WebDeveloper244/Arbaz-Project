const mongoose=require('mongoose')

const productSechema=mongoose.Schema({
    productName:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Prodctcollection',productSechema)