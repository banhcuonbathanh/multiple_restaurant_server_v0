
const { DateTime } = require("luxon");
const orderTestModel  = require("../model/ordertestmodel");
// const productModel = require("../model/productmodel");
// const restaurantModel = require("../model/restaurantmodel");
const orderTestController = {

    createOrderTestModel : async (req, res)=>{
    //     console.log('addDetailProduct productDetailController')
       console.log( 'createOrderTestModel')
    
        try {
            const newOrderTestModel = await orderTestModel.create({
                // orderTestName: req.body.orderTestName,
                restaurantName: req.body.restaurantName,
                BuyingUserName: req.body.BuyingUserName,
                BuyingUserId: req.body.BuyingUserId,
                ProductId: req.body.ProductId,
                address: req.body.address,
                restaurantId: req.body.restaurantId,
                day: req.body.day,
                hour: req.body.hour,
                minute: req.body.minute,
                statusOrder: req.body.statusOrder,
                restaurantOnwnerId: req.body.restaurantOnwnerId,
                productdetailsList: req.body.productdetailsList,
                toppingsList: req.body.toppingsList,
                createAt: DateTime.now(),
                // category:req.body.category,
            });
        const newOrderTestModelSaved = await newOrderTestModel.save();
  
        newOrderTestModelSaved.orderTestId  = newOrderTestModelSaved._id.valueOf() 
        await newOrderTestModelSaved.save();


        res.status(200).json(newOrderTestModelSaved);
    } catch (error) {
        console.log('addDetailProduct error trong addDetailProduct controller');
        res.status(500).json(error);
    }
    },
    // ---------------------------------------------------------------------------
    searchingorderByBuyingUserId : async (req, res)=>{
        const limit = 5;
        const page = req.body.page
        const numberOfOrder = req.body.numberOfOrder
        const lenth =  await orderTestModel.countDocuments({BuyingUserId : req.body.BuyingUserId,statusOrder:req.body.statusOrder  }).exec();
    // ----------

    if(numberOfOrder >=  lenth){

   
        res.status(200).json('has no more');
   
       
      } else {

        try {
      
            const searchedOrder = await orderTestModel.find({BuyingUserId : req.body.BuyingUserId,statusOrder:req.body.statusOrder  }).limit(limit).skip(page);

            res.status(200).json(searchedOrder);
        } catch (error) {
            console.log('searcedProductsdetail error trong searcedProductsdetail controller');
            res.status(500).json(error.message);
        }
      }
    // ---------
       
        },
    // --------------------------------
// addProduct : async (req, res)=>{
//     console.log('addproduct trong productController');
//     try {
//         const newProduct = await product.create({
//             productName: req.body.productName,
//             // productDescription: req.body.productDescription,
//             productImage:req.body.productImage,
//             productId: req.body.productId,
//             // booking: req.body.booking,
//             productPriceThapNhat: req.body.productPriceThapNhat,
//             productPriceCaoNhat: req.body.productPriceCaoNhat,
        
//             productRating: req.body.productRating,
//             isFavourite:req.body.isFavourite,
//             isPopular: req.body.isPopular,
//             // ship: req.body.ship,
//             // booking: req.body.booking,
//             restaurantName: req.body.restaurantName,
//         });
//     const savedProduct = await newProduct.save();
//     res.status(200).json(savedProduct);
// } catch (error) {
//     console.log('addProduct error trong category controller');
//     response.status(500).json(error);
// }
// },
// ---------------------------------------------------------------------------

getAllProductDetail : async (req, res)=>{
    console.log('getAllProductDetail productDetailController')
try {
    const allProductDetail = await productDetail.find();
   
    res.status(200).json(allProductDetail);
} catch (error) {
    console.log('allProductDetail error trong allProductDetail controller');
    res.status(500).json(error.message);
}
},
// ---------------------------------------------------------------------------

searchingorderByRangeOfDate : async (req, res)=>{

    // console.log('searchingorderByRangeOfDate productDetailController')
    // console.log(req.body.fromDate)
    // console.log(req.body.toDate )
try {
    // createAt: {$gte:  req.body.fromDate, $lte:  req.body.toDate}, restaurantOnwnerId: req.body.restaurantOnwnerId
    // const foundOrdertest = await orderTestModel.find(
    //     {
    //         createAt: {$gte:  req.body.fromDate, $lte:  req.body.toDate },
    //     });
        const foundOrdertest = await orderTestModel.find(
            { $and:[
                {
                createAt: {$gte:  req.body.fromDate, $lte:  req.body.toDate}
            }, 
            // {
            //     createAt: { $lte:  req.body.toDate},
            // }, 
            {restaurantOnwnerId: req.body.restaurantOnwnerId},
        ]

            });
     
    res.status(200).json(foundOrdertest);
} catch (error) {
    console.log('allProductDetail error trong allProductDetail controller');
    res.status(500).json(error.message);
}
},

// ---------------------------------------------------------------------------
deleteAllProductDetailOfRestaurant: async(req, res) =>{
    console.log('deleteAllProductDetailOfRestaurant productDetailController')
    try {
        await productDetail.deleteMany({restaurantId: req.body.restaurantId})
        const productModel = await productModel.findOne({restaurantId : req.body.restaurantId});
        productModel.restaurantId = '';
                        await productModel.save()
        // const userfound = userModel.findOne({restaurantId : req.body.restaurantId});
        // userfound.restaurantId = '';
        // await userfound.save()
    } catch (error) {
        console.log('deleteAllProductDetailOfRestaurant error trong product deleteAllProductDetailOfRestaurant');
        res.status(500).json(error);
    }
},

// ----------------------------------------------------------------------------
searchingProductdetailRestaurantId : async (req, res)=>{
    console.log('searchingProductdetailRestaurantId productDetailController')
    // console.log('req.body.searchingkey');
    console.log(req.body.searchingkey);
    // const searchingKey = req.body.searchingkey;
    let regex = new RegExp(req.body.searchingkey,'i');


    // var condition = {restaurantId:{$regex: RegExp(searchingKey), $options:"i"} } 

    try {
  
        const searchedProductsdetail = await productDetail.find({productId : req.body.searchingkey});
//   console.log('searcedProductsdetail')

//   console.log(searchedProductsdetail.length)
        res.status(200).json(searchedProductsdetail);
    } catch (error) {
        console.log('searcedProductsdetail error trong searcedProductsdetail controller');
        res.status(500).json(error.message);
    }
    },
    
    // ---------------------------------------------------------------------------
getProductDetail : async (req, res)=>{
    console.log('getProductDetail productDetailController');
    try {
        const foundedProductDetail = await  productDetail.findOne({productdetaiId: req.body.productDetaiId});
        // console.log(foundedProduct);
        res.status(200).json(foundedProductDetail);
    } catch (error) {
        console.log('foundedProductDetail error trong foundedProductDetail controller');
        res.status(500).json(error);
    }

   

    },

// ---------------------------------------------------------------------------
    updateOrder : async (req, res)=>{
        console.log('updateOrder ordertest controller')
      
// console.log(req.body.productdetaiId)
        try {
     
           
            const foundedorderTestModel = await orderTestModel.findOneAndReplace({orderTestId:req.body.orderTestId  }, 
                {

                    restaurantName: req.body.restaurantName,
                    BuyingUserName: req.body.BuyingUserName,
                    orderTestId: req.body.orderTestId,
                    BuyingUserId: req.body.BuyingUserId,
                 
                    ProductId: req.body.ProductId,
                    address: req.body.address,
                    restaurantId: req.body.restaurantId,
                    day: req.body.day,
                    hour: req.body.hour,
                    minute: req.body.minute,
                    statusOrder: req.body.statusOrder,
                    restaurantOnwnerId: req.body.restaurantOnwnerId,
                    productdetailsList: req.body.productdetailsIdList,
                    toppingsList: req.body.toppingsList,
                    // category:req.body.category,
            
            });
//             console.log('>>>>>>>>>>>>>>>>>>>>>>>>')
// console.log(foundedorderTestModel)
            res.status(200).json(foundedorderTestModel);
        } catch (error) {
            console.log('updateCategory error trong product controller');
            res.status(500).json(error);
        }
    
       
    
        },

// ---------------------------------------------------------------------------
        getOneandDelete : async (req, res) =>{
            console.log('getOneandDelete productDetailController')
console.log(req.body.productdetaiId)
            try {
                await productDetail.findOneAndDelete({productdetaiId:req.body.productdetaiId  });


  //----------------------------------------------------------------------
  const foundedProductModel = await  productModel.findOne({productId: req.body.productId});
  // foundedRestaurantModel.productId = savedProduct.productId;
  // foundedRestaurantModel.productName = savedProduct.productId;
 
  foundedProductModel.productdetailIdList.pull(req.body.productdetaiId);

  await foundedProductModel.save()

  //------------------------------------------------
                res.status(200).json('find   and delete');

                
            } catch (error) {
               console.log('getOneandDelete error trong product controller');
                res.status(500).json(error);
            }
          
        }
}

module.exports = orderTestController;