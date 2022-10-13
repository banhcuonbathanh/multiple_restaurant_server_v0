const mongoose = require("mongoose");

const clickSchema = new mongoose.Schema({

    clickName: {
            type: String,
   
    },
    clickingTiming: [],
    // clickingTimingTest: [
    //     {
    //         restaurantProduct: String,
    //         clickTiming:[
             
    //         ],
    //     }
    // ],
    monitoringDay: {
    type: String,

},
productId: {
    type: String,

},
clickId: {
    type: String,

},
productName: {
    type: String,
    require: true
},
restaurantId: {
    type: String,

},
restaurantName: {
    type: String,
  
},

});

// let category = mongoose.model("category", categorySchema);

// module.exports = {category};

module.exports = mongoose.model("click", clickSchema);