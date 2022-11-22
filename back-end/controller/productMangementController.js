const ProductModal = require('../Modal/productModalMangement')

// const ProductData=(req,res)=>{
//   try {
//     console.log(req.body)
//     res.json({
//         Message:'You have reached the end point of Api',
//         result:req.body
//     })
//   } catch (error) {

//   }
// }
  

const ProductData = async (req, res) => {
  console.log(req.body)
  try {
    const { productName,productPrice } = req.body
    const docToCreate = new ProductModal({
      productName,
      productPrice,
      ImageUrl:req.file.filename,
      ImageName:req.file.originalname,
      ImageMimeType:req.file.mimetype, 
    })
    //i didnt use this method above becuse the 
    //key was same in the image the key is different

    const docToSave = await docToCreate.save()
    res.json({
      message: 'your data is saved',
      result: docToSave
    })

  } catch (error) {
    res.json({
      Message:'Data not Saved',
      result:null
    })

  }


}

const getProductData=async(req,res)=>{
  try {
   const doctoGet= await ProductModal.find()
   res.json({
    Message:"Data is found",
    Data:true,
    Result:doctoGet
   })
  } 
  catch (error) {
    res.json({
      Message:'Data not Saved',
      Data:false,
      result:null
    })
  }
}

const updataData=async(req,res)=>{
  try {
    const docToUpdataData=await ProductModal.updateOne(
      {_id:'637381be5839250b772d975e'}  //khana change karna ha
      ,{status:0} //kitna change karna ha
    )
    res.json({
      Message:"Data is found",
      Data:true,
      Result:docToUpdataData
     })
  } catch (error) {
     res.json({
      Message:'Data not Saved',
      Data:false,
      result:null
    })
  }
}

const deleteData=async(req,res)=>{
  try {
    const docToDelete=await ProductModal.deleteOne({status:0})
    res.json({
      Message:"Data is found",
      Data:true,
      Result:docToDelete
     })
  } catch (error) {
    res.json({
      Message:'Data not Saved',
      Data:false,
      result:null
    })
  }
}


module.exports = {
  ProductData,
  getProductData,
  updataData,
  deleteData
}