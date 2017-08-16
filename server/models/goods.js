var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productSchema = new Schema({
  "productId" : String,
  "productName" : String,
  "salePrice": Number,
  "productImage" : String,
  "productNum":String,
  "checked":String
})

module.exports = mongoose.model("Goods",productSchema);