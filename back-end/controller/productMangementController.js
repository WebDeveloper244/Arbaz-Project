const ProductData=(req,res)=>{
  try {
    console.log(req.body)
    res.json({
        message:'You have reached the end point of Api',
        result:req.body
    })
  } catch (error) {
    
  }
}

module.exports={
    ProductData
}