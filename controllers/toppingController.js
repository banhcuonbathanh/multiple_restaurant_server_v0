
const toppingModel  = require("../model/toppingModel");
const productModel = require("../model/productmodel");
const productDetail  = require("../model/productdetailmodel");
const toppingController = {

// ---------------------------------------------
createToppingProductDetail : async (req, res)=>{
 
    try {
        const newTopping = await toppingModel.create({
            productDetailId: req.body.productDetailId,
            productId: req.body.productId,
            toppingName:req.body.toppingName,
            toppingQuantity: req.body.toppingQuantity,
            restaurantId: req.body.restaurantId,
            userId: req.body.userId,
     
        });
    const toppingSaved = await newTopping.save();
//    console.log('toppingSaved')
//    console.log(toppingSaved)
    toppingSaved.toppingId  = toppingSaved._id.valueOf() 
    await toppingSaved.save();

    const foundedProductModel = await  productDetail.findOne({productdetaiId: toppingSaved.productDetailId});

// console.log('toppingSaved.productDetailId')
// console.log(toppingSaved.productDetailId)

// console.log('foundedProductModel')
// console.log(foundedProductModel)
    foundedProductModel.toppingList.push(toppingSaved.toppingId);

    await foundedProductModel.save()


    res.status(200).json(toppingSaved);
} catch (error) {
    console.log('addDetailProduct error trong addDetailProduct controller');
    res.status(500).json(error.message);
}
},


// ---------------------------------------------
    createTopping : async (req, res)=>{
       
    //    console.log( req.body.productdetailQuantity)
    //    console.log( req.body.productdetailBill)
        try {
            const newTopping = await toppingModel.create({
                productId: req.body.productId,
                toppingName:req.body.toppingName,
                toppingQuantity: req.body.toppingQuantity,
                restaurantId: req.body.restaurantId,
                userId: req.body.userId,
         
            });
        const toppingSaved = await newTopping.save();
       
        toppingSaved.toppingId  = toppingSaved._id.valueOf() 
        await toppingSaved.save();




        //----------------------------------------------------------------------
        // const foundedRestaurantModel = await  restaurantModel.findOne({restaurantId: savedProduct.restaurantId});
        // // foundedRestaurantModel.productId = savedProduct.productId;
        // // foundedRestaurantModel.productName = savedProduct.productId;
        // foundedRestaurantModel.listProductId.push(savedProduct.productId);

        // await foundedRestaurantModel.save()

        //------------------------------------------------

        //----------------------------------------------------------------------
        const foundedProductModel = await  productModel.findOne({productId: toppingSaved.productId});
        // foundedRestaurantModel.productId = savedProduct.productId;
        // foundedRestaurantModel.productName = savedProduct.productId;
        // console.log(' foundedProductModel')
        // console.log(foundedProductModel)
        foundedProductModel.toppingList.push(toppingSaved.toppingId);

        await foundedProductModel.save()

        //------------------------------------------------

       
        res.status(200).json(toppingSaved);
    } catch (error) {
        console.log('addDetailProduct error trong addDetailProduct controller');
        res.status(500).json(error.message);
    }
    },



// ---------------------------------------------------------------------------

getAllTopping : async (req, res)=>{
 
try {
    const allTopping = await toppingModel.find();
   
    res.status(200).json(allTopping);
} catch (error) {
    console.log('getAllTopping error trong  controller');
    res.status(500).json(error.message);
}
},

// ---------------------------------------------------------------------------
deleteAllTopping: async(req, res) =>{
  
    try {
        await toppingModel.deleteMany({restaurantId: req.body.restaurantId})
        // const productModel = await productModel.findOne({restaurantId : req.body.restaurantId});
        // productModel.restaurantId = '';
        //                 await productModel.save()
        // const userfound = userModel.findOne({restaurantId : req.body.restaurantId});
        // userfound.restaurantId = '';
        // await userfound.save()
    } catch (error) {
        console.log('deleteAllTopping error trong  Controller');
        res.status(500).json(error);
    }
},

// ----------------------------------------------------------------------------
searchingToppingWithProductId : async (req, res)=>{
    
    // console.log('req.body.searchingkey');
    // console.log(req.body.productId);
    // const searchingKey = req.body.searchingkey;
    let regex = new RegExp(req.body.productId,'i');


    // var condition = {restaurantId:{$regex: RegExp(searchingKey), $options:"i"} } 

    try {
    
        const searchedTopping = await toppingModel.find({productId : req.body.productId});
//   console.log('searcedProductsdetail')

//   console.log(searchedTopping)
        res.status(200).json(searchedTopping);
    } catch (error) {
        console.log('searcedProductsdetail error trong searcedProductsdetail controller');
        res.status(500).json(error.message);
    }
    },
    // ----------------------------------------------------------------------------
searchingToppingWithProductDetailId : async (req, res)=>{
    console.log('searchingToppingWithProductDetailId Controller')
    // console.log('req.body.searchingkey');
    // console.log(req.body.productId);
    // const searchingKey = req.body.searchingkey;
    let regex = new RegExp(req.body.productId,'i');


    // var condition = {restaurantId:{$regex: RegExp(searchingKey), $options:"i"} } 

    try {
    
        const searchedTopping = await toppingModel.find({productDetailId : req.body.productDetailId});
//   console.log('searcedProductsdetail')

//   console.log(searchedTopping)
        res.status(200).json(searchedTopping);
    } catch (error) {
        console.log('searcedProductsdetail error trong searcedProductsdetail controller');
        res.status(500).json(error.message);
    }
    },
    // ---------------------------------------------------------------------------
getaTopping : async (req, res)=>{
    console.log('getaTopping Controller');
    try {
        const foundedTopping = await  toppingModel.findOne({toppingId: req.body.toppingId});
        // console.log(foundedProduct);
        res.status(200).json(foundedTopping);
    } catch (error) {
        console.log('foundedTopping error trong  controller');
        res.status(500).json(error);
    }

   

    },

// ---------------------------------------------------------------------------
    updateTopping : async (req, res)=>{
        console.log('updateTopping Controller')
        // console.log( req.body.productdetailQuantity,)
// console.log(req.body.productdetaiId)
        try {
     
           
            const foundedTopping = await toppingModel.findOneAndUpdate({toppingId:req.body.toppingId  }, 
                {
                    productId: req.body.productId,
                    toppingName:req.body.toppingName,
                    toppingQuantity: req.body.toppingQuantity,
                    restaurantId: req.body.restaurantId,
                    userId: req.body.userId,
                    toppingId: req.body.toppingId,
                    // category:req.body.category,
            
            });


            res.status(200).json(foundedTopping);
        } catch (error) {
            console.log('updateTopping error trong controller');
            res.status(500).json(error);
        }
    
       
    
        },

// ---------------------------------------------------------------------------
        getOneandDelete : async (req, res) =>{
            console.log('getOneandDelete topping Controller')
console.log(req.body.productdetaiId)
            try {
                await toppingModel.findOneAndDelete({toppingId:req.body.toppingId  });


  //----------------------------------------------------------------------
//   const foundedProductModel = await  productModel.findOne({productId: req.body.productId});
//   // foundedRestaurantModel.productId = savedProduct.productId;
//   // foundedRestaurantModel.productName = savedProduct.productId;
 
//   foundedProductModel.productdetailIdList.pull(req.body.productdetaiId);

//   await foundedProductModel.save()

  //------------------------------------------------
                res.status(200).json('find   and delete');

                
            } catch (error) {
               console.log('getOneandDelete topping error trong product controller');
                res.status(500).json(error);
            }
          
        }
}

module.exports = toppingController;