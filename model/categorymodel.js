const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({

    categoryName: {
            type: String,
            require: true
    },
    categoryImage: {
        type: String,
        require: true
},
categoryId: {
    type: String,
    require: true
},
ship: {
    type: Boolean,
    require: true
},
booking: {
    type: Boolean,
    require: true
},
});

// let category = mongoose.model("category", categorySchema);

// module.exports = {category};

module.exports = mongoose.model("category", categorySchema);