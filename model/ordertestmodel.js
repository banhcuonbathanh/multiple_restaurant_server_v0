


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
    // createAt:{
    //     type: Date,
    //     default: ()=>  Date().toLocaleString( { timeZone: "Asia/Jakarta" })
        
    // }
    createAt:{
        type: Date,
      
        default: ()=>   Date(DateTime.now().year,DateTime.now().month,DateTime.now().day, DateTime.now().hour + 7, DateTime.now().minute  )
        
    }
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