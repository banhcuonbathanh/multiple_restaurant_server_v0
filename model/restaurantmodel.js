const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    userId: {
        type: String,
      
        // unique: true
},
    restaurantName: {
            type: String,
            require: true,
            // unique: true
    },
    restaurantCategory: {
        type: String,
        require: true
       
},
restaurantImageStoreFolder: {
    type: String,
    require: true
   
},
    restaurantImage: {
        type: String,
        require: true
       
},
promotionList:
[{
    type: Number,
 
}],
restaurantId: {
    type: String,
    require: true
},
restaurantAdrress: {
    type: String,
    require: true,
    // unique: true,
},
restaurantStartTime: {
    type: Number,
    require: true
},
restaurantEndingTime: {
    type: Number,
    require: true
},
restaurantMealPreparation: {
    type: Number,
    require: true
},
restaurantComment: {
    type: Number,
    // require: true
},
restaurantRating: {
    type: Number,
    // require: true
},
ship: {
    type: Boolean,
    // require: true
},
booking: {
    type: Boolean,
    // require: true
},
isPromotionAvailable: {
    type: Boolean,
    // require: true
},
listProductId:
    [{
        type: String,
        require: true
    }],

productId: {
    type: String,
    require: true
},
productName: {
    type: String,
    require: true
},
createAt:{
    type: Date,
    default: ()=> Date.now(),
}
});

// let category = mongoose.model("category", categorySchema);

// module.exports = {category};

module.exports = mongoose.model("restaurant", restaurantSchema);;