const mongoose = require("mongoose");

const orderTestSchema = new mongoose.Schema({

    // orderTestName: {
    //         type: String,
    //         require: true
    // },
    restaurantName: {
        type: String,
        require: true
},
    BuyingUserName: {
        type: String,
        require: true
},
    orderTestId: {
        type: String,
        require: true
},
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

// let category = mongoose.model("category", categorySchema);

// module.exports = {category};

module.exports = mongoose.model("orderTest", orderTestSchema);;



// ship: {
//     type: Boolean,
//     require: true
// },
// booking: {
//     type: Boolean,
//     require: true
// },