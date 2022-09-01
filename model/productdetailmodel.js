const mongoose = require("mongoose");

const productdetaiSchema = new mongoose.Schema({

    productdetaitName: {
            type: String,
            require: true
    },
    productdetaiDescription: {
        type: String,
        require: true
},
productdetaiImage: {
    type: String,
    require: true,

},
productdetaiId: {
    type: String,
    require: true,

},
userId: {
    type: String,
    require: true,

},
productdetaiPrice: {
    type: Number,
   
  
},
productdetailQuantity: {
    type: Number,
   
  
},
productdetailBill: {
    type: Number,
   
  
},

productdetaiRating: {
    type: Number,
    require: true,
  
},
productdetaiIsFavourite: {
    type: Boolean,
  
},
productdetaiIsPopular: {
    type: Boolean,
   
},

restaurantName: {
        type: String,
        require: true
},
restaurantId: {
    type: String,
  
},
productName: {
    type: String,
    require: true
},
productId: {
type: String,

},
promotion: {
    type: Number,
    
    },
productdetailFolder: {
    type: String,
    require: true
},
toppingList:
[{
    type: String,
    require: true
}],
// productdetailIdList:
//     [{
//         type: String,
//         require: true
//     }],
});

// let category = mongoose.model("category", categorySchema);

// module.exports = {category};

module.exports = mongoose.model("productDetail", productdetaiSchema);;



// ship: {
//     type: Boolean,
//     require: true
// },
// booking: {
//     type: Boolean,
//     require: true
// },