const ProductModal = require('../Modal/productModalMangement')

// const ProductData=(req,res)=>{
//   try {
//     console.log(req.body)
//     res.json({
//         message:'You have reached the end point of Api',
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
      productPrice
    })

    const docToSave = await docToCreate.save()
    res.json({
      message: 'your data is saved',
      result: docToSave
    })

  } catch (error) {

  }

}



module.exports = {
  ProductData
}