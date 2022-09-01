const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    BuyingUserId: {
            type: String,
            require: true
    },
    ProductId: {
        type: String,
        require: true
},
address: {
    type: String,
    require: true
},
restaurantId: {
    type: String,
  
},

orderId: {
    type: String,
  

},

day: {
    type: String,


},
hour: {
    type: String,


},
minute: {
    type: String,
 

},
statusOrder: {
    type: String,
    require: true,

},
restaurantOnwnerId: {
    type: String,
    require: true,

},
productdetailsList:
    [],
    toppingsList:
    [],
  
});


module.exports = mongoose.model("order", orderSchema);