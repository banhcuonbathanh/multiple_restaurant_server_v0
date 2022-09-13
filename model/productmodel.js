const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    productName: {
            type: String,
            require: true
    },
    productDescription: {
        type: String,
        require: true
},
productImage: {
    type: String,
    require: true,

},
productId: {
    type: String,
    require: true,

},
folderProductImage: {
    type: String,
    require: true,

},
productPriceThapNhat: {
    type: Number,
   
  
},
productPriceCaoNhat: {
    type: Number,
 
  
},
productRating: {
    type: Number,
    require: true,
  
},
isFavourite: {
    type: Boolean,
  
},
isPopular: {
    type: Boolean,
   
},

restaurantName: {
        type: String,
        require: true
},
restaurantId: {
    type: String,
  
},


productdetailIdList:
    [{
        type: String,
        require: true
    }],
    toppingList:
    [{
        type: String,
        require: true
    }],
    promotionList:
    [{
        type: Number,
     
    }],
    createAt:{
        type: Date,
        default: ()=> Date.now(),
    }
// topping:
//    [
//        {
//         toppingName: String,
//         toppingQuantity: String,

//        }
//    ],
});

// let category = mongoose.model("category", categorySchema);

// module.exports = {category};

module.exports = mongoose.model("product", productSchema);;



// ship: {
//     type: Boolean,
//     require: true
// },
// booking: {
//     type: Boolean,
//     require: true
// },