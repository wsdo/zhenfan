var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    "userId": String,
    "userName" : String,
    "userPwd": String,
    "orderList" : Array,
    "cartList" : [
      {
        "productId": String,
        "productName" : String,
        "salePrice": Number,
        "productNum": String,
        "productImage": String,
        "productUrl": String,
        "checked": String
      }
    ],
    "addressList":[
      {
        "addressId": String,
        "userName": String,
        "streetName": String,
        "postCode": Number,
        "tel": Number,
        "isDefault": Boolean
      }
    ]
})

module.exports = mongoose.model("user",userSchema);