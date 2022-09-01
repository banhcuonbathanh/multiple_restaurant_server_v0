const mongoose = require("mongoose");

const toppingSchema = new mongoose.Schema({
    productId: {
        type: String,
        require: true
    },
    // productdetailId: {
    //     type: String,
    //     require: true
    // },
    toppingName: {
        type: String,
        require: true
},
toppingQuantity: {
    type: String,
    require: true
},

    restaurantId: {
        type: String,
        require: true
      
},
    userId: {
        type: String,
        require: true
},
toppingId: {
    type: String,
    require: true
},

productDetailId: {
    type: String,
    require: true
},



}, {timestamps: true});


module.exports = mongoose.model("topping", toppingSchema);

