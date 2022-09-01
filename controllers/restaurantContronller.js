
const restaurant  = require("../model/restaurantmodel");
const userModel  = require("../model/userModel");
const productModel = require("../model/productmodel");
var fs = require('fs');
const restaurantController = {
addRestaurantd : async (req, res, next)=>{
//   console.log(' add restaurant ');

    try {
        const newRestaurant = await restaurant.create({
            userId:req.body.userId,
            restaurantCategory: req.body.restaurantCategory,
            restaurantName:req.body.restaurantName,
            restaurantImage: req.body.restaurantImage,
            restaurantId:req.body.restaurantId,
            restaurantAdrress: req.body.restaurantAdrress,
            restaurantStartTime: req.body.restaurantStartTime,
            restaurantEndingTime: req.body.restaurantEndingTime,
            restaurantMealPreparation: req.body.restaurantMealPreparation,
            restaurantComment:req.body.restaurantComment,
            restaurantRating: req.body.restaurantRating,
            ship: req.body.ship,
            booking: req.body.booking,
            restaurantImageStoreFolder: req.body.restaurantImageStoreFolder
        }, 
        
        );

 const savedRestaurant = await newRestaurant.save();
 savedRestaurant.restaurantId  = savedRestaurant._id.valueOf() 
        await savedRestaurant.save();

      
            const foundedUser = await  userModel.findOne({userId: savedRestaurant.userId});
            foundedUser.restaurantId = savedRestaurant.restaurantId;
            await foundedUser.save()
         
       
    res.status(200).json(savedRestaurant);
} catch (error) {
    // console.log('addProduct error trong category controller');
    res.status(500).json(error);
}


},

// ---------------------------------------------------------------------------
getAllRestaurant : async (req, res)=>{
const page = req.body.page;
const limit = 8;
const endIndex = page*limit;
try {
    const allRestaurants = await restaurant.find();
   
    res.status(200).json(allRestaurants);
} catch (error) {
    // console.log('getAllProducts error trong prodeuct controller');
    res.status(500).json(error.message);
}
},

// -----------------------------------------------------------------


searchingRestaurantswithCategory_Page : async (req, res)=>{

 
    const limit = 2;
    const page = req.body.page
    const numberOfRestaurant = req.body.numberOfRestaurant
    const lenth =  await restaurant.countDocuments({}).exec();
    // console.log('numberOfRestaurant')
    // console.log(numberOfRestaurant)
    // console.log('lenth')
    // console.log(lenth)
    if(numberOfRestaurant >=  lenth){

     
        res.status(200).json('has no more');
   
       
      } else {

        try {
            const allRestaurants = await restaurant.find({restaurantCategory:req.body.categoryName}).limit(limit).skip(page);
            res.status(200).json(allRestaurants);
     
         console.log(allRestaurants)
        } catch (error) {
            // console.log('getAllProducts error trong prodeuct controller');
            res.status(500).json(error.message);
        }
      }
  
    },
       // -----------------------------------------------------------------

       searchingRestaurantPromotion : async (req, res)=>{
  
        const limit = 4;
        const numberOfRestaurant = req.body.numberOfRestaurant
        const page = req.body.page
        const lenth =  await restaurant.countDocuments({isPromotionAvailable: 'true'}).exec();
console.log(numberOfRestaurant)
console.log(page)
        if(numberOfRestaurant >=  lenth){
            console.log('>>>>>>>>>>>>>>>>>>>>>>>>>')
            res.status(200).json('has no more');
        } else {
            try {
                console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<')
                const searchedRestaurant = await restaurant.find({ isPromotionAvailable: 'true'}).limit(limit).skip(page);
                res.status(200).json(searchedRestaurant);
            } catch (error) {
                console.log('searcedProductsdetail error trong searcedProductsdetail controller');
                res.status(500).json(error.message);
            }
        }
      
        },
    // -----------------------------------------------------------------

searchingRestaurantId : async (req, res)=>{
    console.log('req.body.searchingkey');
    console.log(req.body.restaurantId);
    // const searchingKey = req.body.searchingkey;
    let regex = new RegExp(req.body.searchingkey,'i');


    // var condition = {restaurantId:{$regex: RegExp(searchingKey), $options:"i"} } 

    try {

        const searchedRestaurant = await restaurant.findOne({restaurantId : req.body.restaurantId});
//   console.log('searcedProductsdetail')

  console.log(searchedRestaurant)
        res.status(200).json(searchedRestaurant);
    } catch (error) {
        console.log('searcedProductsdetail error trong searcedProductsdetail controller');
        res.status(500).json(error.message);
    }
    },
     // -----------------------------------------------------------------

     searchingRestaurantWithNameLetter : async (req, res)=>{
  
    // const searchingKey = req.body.searchingkey;
    let regex = new RegExp(req.body.nameLetters,'i');


    // var condition = {restaurantId:{$regex: RegExp(searchingKey), $options:"i"} } 

    try {

        const searchedRestaurant = await restaurant.find({restaurantName : {$regex : regex}});
  


        res.status(200).json(searchedRestaurant);
    } catch (error) {
        console.log('searcedProductsdetail error trong searcedProductsdetail controller');
        res.status(500).json(error.message);
    }
    },
    
// -----------------------------------------------------
getRestaurant : async (req, res)=>{
    console.log(' get one restaraunt')
    try {
        const foundedRestaurant = await  product.findOne({restaurantId: req.body.restaurantId});
        // console.log(foundedProduct);
        res.status(200).json(foundedRestaurant);
    } catch (error) {
        console.log('foundedProduct error trong product controller');
        res.status(500).json(error);
    }

   

    },


    getOneupdateRestaurant : async (req, res)=>{
console.log('getOneupdateRestaurant');
console.log( 'req.body.restaurantCategory');
console.log( req.body.restaurantCategory);
        try {
     
           
            const foundedRestaurant = await restaurant.findOneAndUpdate({restaurantId:req.body.restaurantId}, 
                {
                    userId: req.body.userId,
                    restaurantName: req.body.restaurantName,
                    restaurantCategory: req.body.restaurantCategory,
          
            restaurantImage: req.body.restaurantImage,
            restaurantId:req.body.restaurantId,
            restaurantAdrress: req.body.restaurantAdrress,

            productId: req.body.productId,
            listProductId: req.body.listProductId,
            productName: req.body.productName,
            restaurantStartTime: req.body.restaurantStartTime,
            restaurantEndingTime: req.body.restaurantEndingTime,
            restaurantMealPreparation: req.body.restaurantMealPreparation,
            restaurantComment:req.body.restaurantComment,
            restaurantRating: req.body.restaurantRating,
            ship: req.body.ship,
            booking: req.body.booking,
            restaurantImageStoreFolder: req.body.restaurantImageStoreFolder
            
            });


            res.status(200).json(foundedRestaurant);
        } catch (error) {
            console.log('getOneupdateRestaurant error trong product controller');
            res.status(500).json(error);
        }
    
       
    
        },


        getOneandDelete : async (req, res) =>{
            // console.log(req.body.restaurantId );
            console.log('getOneandDelete addRestaurantd ');

            try {
                //-----------------------------------------------------------
                await restaurant.findOneAndDelete({restaurantId:req.body.restaurantId  });
                // console.log('1111111111111111 ');
                const userfound = await userModel.findOne({restaurantId : req.body.restaurantId});
                // console.log('222222222');
                userfound.restaurantId = '';
                // console.log('3333333333');
                await userfound.save()
                fs.rmdirSync( req.body.restaurantImageStoreFolder, { recursive: true });
        //--------------------------------------------------------
        // delete product with restauraid in productmode
    await productModel.deleteMany({restaurantId: req.body.restaurantId});

        //---------------------------------------------------
                res.status(200).json('find   and delete');
            } catch (error) {
               console.log('getOneandDelete error trong restaurantController'),
                res.status(500).json(error);
            }
          
        }
}

module.exports = restaurantController;