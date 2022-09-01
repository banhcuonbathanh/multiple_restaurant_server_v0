
const product  = require("../model/productmodel");
const restaurantModel = require("../model/restaurantmodel");

const productController = {


    addProduct : async (req, res)=>{
        // console.log('req.body.folderProductImage')
        // console.log(req.body.folderProductImage)
        try {
            const newProduct = await product.create({
                
                productName: req.body.productName,
                productImage: req.body.productImage,
                productId:req.body.productId,
                restaurantId: req.body.restaurantId,
                productPriceThapNhat: req.body.productPriceThapNhat,
                productPriceCaoNhat: req.body.productPriceCaoNhat,
                productRating:req.body.productRating,

                isFavourite: req.body.isFavourite,
                isPopular: req.body.isPopular,
                restaurantName:req.body.restaurantName,
                folderProductImage:req.body.folderProductImage,
            });
        const savedProduct = await newProduct.save();
   
        savedProduct.productId  = savedProduct._id.valueOf() 
        await savedProduct.save();
//----------------------------------------------------------------------
        const foundedRestaurantModel = await  restaurantModel.findOne({restaurantId: savedProduct.restaurantId});
        // foundedRestaurantModel.productId = savedProduct.productId;
        // foundedRestaurantModel.productName = savedProduct.productId;
        foundedRestaurantModel.listProductId.push(savedProduct.productId);

        await foundedRestaurantModel.save()

        //------------------------------------------------
        res.status(200).json(savedProduct);
    } catch (error) {
        console.log('addCategory error trong category controller');
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

getAllProducts : async (req, res)=>{

try {
    const allProducts = await product.find();
   
    res.status(200).json(allProducts);
} catch (error) {
    console.log('getAllProducts error trong prodeuct controller');
    res.status(500).json(error.message);
}
},

// ---------------------------------------------------------------------------



searchingProducts : async (req, res)=>{
    // console.log('searchingProducts');
    // console.log(req.body.searchingkey);
    // console.log('req.body.searchingkey');
    // console.log(req.body.searchingkey);
    // const searchingKey = req.body.searchingkey;
    let regex = new RegExp(req.body.searchingkey,'i');
  
    // var condition = {restaurantId:{$regex: RegExp(searchingKey), $options:"i"} } 

    try {
        const searcedProducts = await product.find({restaurantId: req.body.searchingkey});
        // console.log('searcedProducts.length');
        // console.log(searcedProducts.length);
        res.status(200).json(searcedProducts);
    } catch (error) {
        console.log('getAllProducts error trong prodeuct controller');
        res.status(500).json(error.message);
    }
    },
    // ---------------------------------------------------------------------------



searchingProductsWithNameLetter : async (req, res)=>{
    // console.log('searchingProducts');
    // console.log(req.body.nameLetters);
    // console.log('req.body.searchingkey');
    // console.log(req.body.searchingkey);
    // const searchingKey = req.body.searchingkey;
    let regex = new RegExp(req.body.nameLetters,'i');
  
    // var condition = {restaurantId:{$regex: RegExp(searchingKey), $options:"i"} } 

    try {
        const searcedProducts = await product.find({productName: {$regex : regex}});
        // console.log('searcedProducts.length');
        // console.log(searcedProducts.length);
        res.status(200).json(searcedProducts);
    } catch (error) {
        console.log('getAllProducts error trong prodeuct controller');
        res.status(500).json(error.message);
    }
    },
    // ---------------------------------------------------------------------------
getProduct : async (req, res)=>{
    
    try {
        const foundedProduct = await  product.findOne({productId: req.body.productId});
        console.log(foundedProduct);
        res.status(200).json(foundedProduct);
    } catch (error) {
        console.log('foundedProduct error trong product controller');
        res.status(500).json(error);
    }

    },
    getProductUpdatetopping : async (req, res)=>{
        console.log('getProductUpdatetopping trong product controller');
    var topping = {
        toppingName: req.body.toppingName,
        toppingQuantity: req.body.toppingQuantity,
    };
    console.log('topping');
    console.log(topping);
        try {
            const foundedProduct = await  product.findOne({productId: req.body.productId}, );
            
            foundedProduct.topping.push(topping);
           savepoduct =await foundedProduct.save();
           console.log('savepoduct')
            console.log(savepoduct)
            res.status(200).json(savepoduct);
        } catch (error) {
            console.log('getProductUpdatetopping error trong product controller');
            res.status(500).json(error);
        }
    
        },
    // ------------------------------------------
    deleteAllProductOfRestaurant: async(req, res) =>{
console.log('deleteAllProductOfRestaurant');
        try {

            const productRemain = await product.find({restaurantId: req.body.restaurantId});

            if (productRemain.leng >0) {
                await product.deleteMany({restaurantId: req.body.restaurantId});
 
                const restaurantFound = await restaurantModel.findOne({restaurantId : req.body.restaurantId});
                restaurantFound.restaurantId = '';
                                await restaurantFound.save()
            }
          
        } catch (error) {
            console.log('deleteAllProductOfRestaurant error trong product deleteAllProductOfRestaurant');
            res.status(500).json(error);
        }
    },

// ---------------------------------------------------------------------------
    updateProduct : async (req, res)=>{
console.log('req.body.productPriceCaoNhat')
console.log(req.body.productPriceCaoNhat)
        try {
            const foundedProduct = await product.findOneAndUpdate({productId:req.body.productId  }, 
                {
                    
                    productName: req.body.productName,
                    productImage:req.body.productImage,
                    productId: req.body.productId,
                    productPriceThapNhat: req.body.productPriceThapNhat,
                    productPriceCaoNhat: req.body.productPriceCaoNhat,
                    productRating: req.body.productRating,
                    isFavourite:req.body.isFavourite,
                    isPopular: req.body.isPopular,
                    restaurantName: req.body.restaurantName,
                       folderProductImage: req.body.folderProductImage,
                    productDescription: req.body.productDescription,
                    restaurantId:  req.body.restaurantId    
            
            });
            res.status(200).json(foundedProduct);
        } catch (error) {
            console.log('updateProduct error trong updateProduct controller');
            res.status(500).json(error);
        }
        },

// ---------------------------------------------------------------------------
        getOneandDelete : async (req, res) =>{

console.log("getOneandDelete productController ")
            try {
                await product.findOneAndDelete({productId:req.body.productId  });


                // ---------------------------------------------------------------------------
    
//----------------------------------------------------------------------------

const foundedRestaurantModel = await  restaurantModel.findOne({restaurantId: req.body.restaurantId});

// foundedRestaurantModel.productName = savedProduct.productId;
foundedRestaurantModel.listProductId.pull(req.body.productId );

await foundedRestaurantModel.save()

//----------------------------------------------------------------------------


                res.status(200).json('find   and delete');
            } catch (error) {
               console.log('getOneandDelete error trong product controller');
                res.status(500).json(error);
            }
          
        }
}

module.exports = productController;