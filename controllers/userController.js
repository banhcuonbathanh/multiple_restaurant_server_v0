
const User = require('../model/userModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let refreshTokens = [];

const userModel = require("../model/userModel");

const userController = {


   // ---------------------------------------------------------------------------
     //LOGIN
     signIn: async (req, res) => {
        //  console.log(' sign in userController')
        
    try {
        // console.log(' sign in userController try')
      const user = await User.findOne({ userEmail: req.body.userEmail });
      if (!user) {
        console.log(' sign in userController try !user')
       return res.status(404).json("Incorrect username");
      }
      const validPassword = await bcrypt.compare(
        req.body.userPassword,
        user.userPassword
      );
    //   console.log('req.body.userPassword')
    //   console.log(req.body.userPassword)
    //   console.log('user.userPassword')
    //   console.log(user.userPassword)
   
      if (!validPassword) {
        console.log(' sign in userController try !!validPassword')
        return  res.status(404).json("Incorrect password");
      }
      if (user && validPassword) {
        // //Generate access token
        // const accessToken = authController.generateAccessToken(user);
        // //Generate refresh token
        // const refreshToken = authController.generateRefreshToken(user);
        // refreshTokens.push(refreshToken);
        //STORE REFRESH TOKEN IN COOKIE
        // res.cookie("refreshToken", refreshToken, {
        //   httpOnly: true,
        //   secure:false,
        //   path: "/",
        //   sameSite: "strict",
        // });
        // const { password, ...others } = user._doc;
        // res.status(200).json({ ...others, accessToken, refreshToken });

// test
console.log(user)
        res.status(200).json(user);
      }
    } catch (err) {
        return res.status(500).json(err);
    }
  },

    // ---------------------------------------------------------------------------
addUser : async (req, res)=>{
    console.log('addUser');
    try {

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.userPassword, salt);


        const newUser = await userModel.create({
            userAdmin: req.body.userAdmin,
            userPhone: req.body.userPhone,
            userAdrress:req.body.userAdrress,
            userPassword: hashed,
            userEmail: req.body.userEmail,
            userName: req.body.userName,
            restaurantId: req.body.restaurantId,
            sockerId: 'sockerId',
        });
       
    const userSaved = await newUser.save();
    userSaved.userId  = userSaved._id.valueOf() 
   
    await userSaved.save();
    
    res.status(200).json(userSaved);
} catch (error) {
    console.log('addUser error trong addUser controller');
    res.status(500).json(error);
}
},
// ---------------------------------------------------------------------------

    // ---------------------------------------------------------------------------
    addOrderingInformation : async (req, res)=>{
        console.log('addOrderingInformation');
        try {
    
            const foundedUser = await  userModel.findOne({userId: req.body.userId});
            foundedUser.userName = req.body.userName;
            foundedUser.userPhone = req.body.userPhone;
            foundedUser.userAdrress = req.body.userAdrress;
           
           
        const userSaved = await foundedUser.save();

        
        res.status(200).json(userSaved);
    } catch (error) {
        console.log('addOrderingInformation error trong addUser controller');
        res.status(500).json(error);
    }
    },
    // ---------------------------------------------------------------------------
getAllUser : async (req, res)=>{
console.log('getAllUser controller');
try {
    const allUser = await userModel.find();
//    console.log(allUser)
    res.status(200).json(allUser);
} catch (error) {
    console.log('getAllUser error trong getAllUser controller');
    res.status(500).json(error.message);
}
},

// ---------------------------------------------------------------------------
getOneUser : async (req, res)=>{
  
    
    try {
        const foundedUser = await  userModel.findOne({userId: req.body.userId});
       
        res.status(200).json(foundedUser);
    } catch (error) {
        console.log('getUser error trong getUser controller');
        res.status(500).json(error);
    }

   

    },

// ---------------------------------------------------------------------------


addFavouriteProductDetail : async (req, res)=>{
  console.log('addFavouriteProductDetail userController');
    
    try {
        const foundedUser = await  userModel.findOne({userId: req.body.userId});
        foundedUser.favouriteProductDetails.push(req.body.productDetailId);
        foundedUser.save();
        // res.status(200).json(foundedUser);
    } catch (error) {
        console.log('addFavouriteProductDetail error');
        res.status(500).json(error);
    }

   

    },


    // ---------------------------------------------------------------------------


removeFavouriteProductDetail : async (req, res)=>{
    console.log('removeFavouriteProductDetail userController');
      
      try {
          const foundedUser = await  userModel.findOne({userId: req.body.userId});
          const index =    foundedUser.favouriteProductDetails.indexOf(req.body.productDetailId);
        //   console.log(req.body.productDetailId);
        //   console.log(foundedUser.favouriteProductDetails);
        //   console.log(index);
          if (index > -1) {
            foundedUser.favouriteProductDetails.splice(index, 1); // 2nd parameter means remove one item only
          }
        
          foundedUser.save();
          // res.status(200).json(foundedUser);
      } catch (error) {
          console.log('removeFavouriteProductDetail error');
          res.status(500).json(error);
      }
  
     
  
      },
// ---------------------------------------------------------------------------


getFavouriteProductDetail : async (req, res)=>{
    console.log('getFavouriteProductDetail userController');
   console.log(req.body.userId)
      try {

        const foundedUser = await  userModel.findOne({userId: req.body.userId}).populate('favouriteProductDetails' );
        console.log('foundedUser')
        console.log(foundedUser)
        // console.log( foundedUser.addFavouriteProductDetail)
       
        // const FavouriteProductDetail1 = await  foundedUser.findOne({})

        // .populate("favouriteProductDetails" );
        //   const FavouriteProductDetail = await  userModel.findOne({userId: req.body.userId})

        //   .populate("favouriteProductDetails" );
        //   FavouriteProductDetail.forEach(function (ProductDetail) {
        //     var x = arrayItem.prop1 + 2;
        //     console.log(x);
        // });
        
    // console.log(FavouriteProductDetail1)
          res.status(200).json(foundedUser);
      } catch (error) {
          console.log('addFavouriteProductDetail error');
          console.log(error.message);
          res.status(500).json(error);
      }
  
     
  
      },
// ---------------------------------------------------------------------------
getoneandupdate : async (req, res)=>{
        console.log('updateUser');
        
        try {
     
           
            const foundedUser = await userModel.findOneAndReplace({userId:req.body.userId  },
                
                { userAdmin: req.body.userAdmin,
                    userPhone: req.body.userPhone,
                    userAdrress:req.body.userAdrress,
                    userPassword: req.body.userPassword,
                    userEmail: req.body.userEmail,
                    userName: req.body.userName,});


            res.status(200).json(foundedUser);
        } catch (error) {
            console.log('getoneandupdate error trong getoneandupdate controller');
            res.status(500).json(error);
        }
    
       
    
        },

// ---------------------------------------------------------------------------
        getOneandDelete : async (req, res) =>{


            try {
                await userModel.findOneAndDelete({userId:req.body.userId  });
                res.status(200).json('find   and delete');
            } catch (error) {
               console.log('getOneandDelete error trong getOneandDelete controller');
                res.status(500).json(error);
            }
          
        }
}

module.exports = userController;


