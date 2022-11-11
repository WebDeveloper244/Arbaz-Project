const mongoose=require('mongoose')

const productSechema=mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

module.exports=mongoose.modeln('Prodctcollection',productSechema)