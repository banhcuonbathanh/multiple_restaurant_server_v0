const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    restaurantId: {
        type: String,
      
},
    userId: {
        type: String,
        require: true
},
sockerId: {
    type: String,
    require: true
},
userStatus: {
    type: Boolean,
    require: true
},
    userName: {
            type: String,
            require: true
    },
    userEmail: {
        type: String,
        require: true
},
userPassword: {
    type: String,
    require: true
},

userAdrress: {
    type: String,

},
userPhone: {
    type: String
},
userAdmin: {
    type: String,
    default: 'normal',

},
//         type: mongoose.Schema.Types.ObjectId,
favouriteProductDetails: [
    {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"productDetail",
    }
],

}, {timestamps: true});
// userSchema.pre('save', function(next) {
//     this.userId = this.userEmail + 'this.userName',
  
//     next();
// });
// let category = mongoose.model("category", categorySchema);

// module.exports = {category};

module.exports = mongoose.model("user", userSchema);


// const mongoose = require("mongoose");

// const Tutorial = mongoose.model(
//   "Blog",
//   new mongoose.Schema({
//     title: String,
//     author: String,
//     images: [],
//     feedbacks: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Feedback"
//       }
//     ]
//   })
// );

// module.exports = Tutorial;
   
// const mongoose = require("mongoose");

// const Comment = mongoose.model(
//   "Feedback",
//   new mongoose.Schema({
//     username: String,
//     text: String,
//     createdAt: Date
//   })
// );

// module.exports = Feedback;