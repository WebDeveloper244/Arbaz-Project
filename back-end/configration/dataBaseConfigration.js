const package=require('../package.json')

const mongoose=require('mongoose')
 
mongoose.connect('mongodb+srv://ecom123:ecom123@cluster0.lxh1kzo.mongodb.net/E-commerence?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},(error,connection)=>{
    if(!error){
      console.log('mongodb connected')
        console.log("Your app have following Dependenties")
      for(let dependencies in package.dependencies)
      
      console.log(dependencies)
    }
    else
    console.log('MongoDb is not connected'+error)
})