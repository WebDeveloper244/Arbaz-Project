const mongoose=require('mongoose')
 
mongoose.connect('mongodb+srv://ecom123:ecom123@cluster0.lxh1kzo.mongodb.net/E-commerence?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},(error,connection)=>{
    if(!error)console.log('mongodb conncedted')
    else
    console.log(error)
})