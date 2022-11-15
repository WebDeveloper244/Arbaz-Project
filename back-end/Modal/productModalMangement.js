const mongoose = require('mongoose')

// Date
const today = new Date(); //date class
const day = today.getDate(); //day
const month = today.getMonth() + 1; //month
const year = today.getFullYear(); //year
const time = today.getTime(); //time 

//schema
const productSechema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    status: {
        type: Number, default: 1
    },
    ImageUrl: { type: String },
    ImageName: { type: String },
    ImageMimeType: { type: String }, //file type
    CreatedDate: {
        type: String,
        default: `${year}-${month}-${day}-${time}`,
    },

}, { timeStamp: true })

module.exports = mongoose.model('Prodctcollection', productSechema)