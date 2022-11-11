
const express=require('express')
const AppLicationConfirgration=require('./configration/dataBaseConfigration')
const app=express();
const cors=require('cors')
const port=8888;

//block start initialization app
app.use((express.urlencoded({extended:true})))
app.use(express.json())
app.use(express.text())
app.use(express.raw())
app.use(cors())  //cors allow us front end request to access

const ProductMangementRouter=require('./Router/productMangementRouter');
app.use('/ProductMangementRouter',ProductMangementRouter)


app.listen(port,()=>{
   console.log(`Server is listenting at port ${port}....`)
})
