
const productDetail  = require("../model/productdetailmodel");
const productModel = require("../model/productmodel");
const restaurantModel = require("../model/restaurantmodel");
const productDetailController = {


    addDetailProduct : async (req, res)=>{
    //     console.log('addDetailProduct productDetailController')
    //    console.log( req.body.promotion)
    
        try {
            const newProductDetail = await productDetail.create({
                

                promotion:req.body.promotion,
                productdetailQuantity: req.body.productdetailQuantity,
                productdetailBill:req.body.productdetailBill,



                productdetaitName: req.body.productdetaitName,
                productdetaiDescription: req.body.productdetaiDescription,
                productdetaiImage: req.body.productdetaiImage,
                productdetaiId:req.body.productdetaiId,
                productdetaiPrice: req.body.productdetaiPrice,
                productdetaiRating:req.body.productdetaiRating,

                productdetailQuantity:req.body.productdetailQuantity,

                productdetailBill:req.body.productdetailBill,

                productdetaiIsFavourite: req.body.productdetaiIsFavourite,
                productdetaiIsPopular: req.body.productdetaiIsPopular,
                productName: req.body.productName,
                productId: req.body.productId,
                restaurantName:req.body.restaurantName,
                restaurantId: req.body.restaurantId,
                
                productdetailFolder: req.body.productdetailFolder,
                userId: req.body.userId,
                // category:req.body.category,
            });
        const productDetailSaved = await newProductDetail.save();
  
        productDetailSaved.productdetaiId  = productDetailSaved._id.valueOf() 
        await productDetailSaved.save();




        //----------------------------------------------------------------------
        // const foundedRestaurantModel = await  restaurantModel.findOne({restaurantId: savedProduct.restaurantId});
        // // foundedRestaurantModel.productId = savedProduct.productId;
        // // foundedRestaurantModel.productName = savedProduct.productId;
        // foundedRestaurantModel.listProductId.push(savedProduct.productId);

        // await foundedRestaurantModel.save()

        //------------------------------------------------

        //----------------------------------------------------------------------
        const foundedProductModel = await  productModel.findOne({productId: productDetailSaved.productId});
        const foundedRestaurantModel = await  restaurantModel.findOne({restaurantId: productDetailSaved.restaurantId});
        // foundedRestaurantModel.productId = savedProduct.productId;
        // foundedRestaurantModel.productName = savedProduct.productId;
       
        foundedProductModel.productdetailIdList.push(productDetailSaved.productdetaiId);
        foundedProductModel.promotionList.push(productDetailSaved.promotion)
        foundedRestaurantModel.promotionList.push(productDetailSaved.promotion)
        foundedRestaurantModel.isPromotionAvailable = true;
        await foundedProductModel.save()
        await foundedRestaurantModel.save()
        //------------------------------------------------


        res.status(200).json(productDetailSaved);
    } catch (error) {
        console.log('addDetailProduct error trong addDetailProduct controller');
        res.status(500).json(error);
    }
    },
    // ---------------------------------------------------------------------------
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

try {
    const allProductDetail = await productDetail.find();
   
    res.status(200).json(allProductDetail);
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

    // console.log('req.body.searchingkey');
   
    // const searchingKey = req.body.searchingkey;
    let regex = new RegExp(req.body.searchingkey,'i');

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
    // ----------------------------------------------------------------------------
    searchingProductsDetailWithNameLetter : async (req, res)=>{
    // console.log('searchingProductsDetailWithNameLetter searchingProductsDetailWithNameLetter')
    // // console.log('req.body.searchingkey');
    // console.log(req.body.nameLetters);
    // const searchingKey = req.body.searchingkey;
    let regex = new RegExp(req.body.nameLetters,'i');

    try {
     
        const searchedProductsdetail = await productDetail.find({productdetaitName : {$regex : regex}});
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
    updateProduct : async (req, res)=>{
        console.log('updateProduct productDetailController')
        console.log( req.body.productdetailQuantity,)
// console.log(req.body.productdetaiId)
        try {
     
           
            const foundedProductDetail = await productDetail.findOneAndReplace({productdetaiId:req.body.productdetaiId  }, 
                {

                    productdetaitName: req.body.productdetaitName,
                    productdetaiDescription: req.body.productdetaiDescription,
                    productdetaiImage: req.body.productdetaiImage,
                    productdetailFolder: req.body.productdetailFolder,

                    productdetaiId:req.body.productdetaiId,
                    productdetaiPrice: req.body.productdetaiPrice,
                    productdetaiRating:req.body.productdetaiRating,
                    productdetailQuantity: req.body.productdetailQuantity,
                    productdetailBill:req.body.productdetailBill,
                    productdetaiIsFavourite: req.body.productdetaiIsFavourite,
                    productdetaiIsPopular: req.body.productdetaiIsPopular,
                 

                 

                    productName: req.body.productName,
                    productId: req.body.productId,
                    restaurantName:req.body.restaurantName,
                    restaurantId: req.body.restaurantId,
                    productdetailIdList: req.body.productdetailIdList,
                    userId: req.body.userId,
                    // category:req.body.category,
            
            });


            res.status(200).json(foundedProductDetail);
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

module.exports = productDetailController;