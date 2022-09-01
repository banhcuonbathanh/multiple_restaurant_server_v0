const console = require('console');
var fs = require('fs');
const path = require('path');
const restaurant  = require("../model/restaurantmodel");
const product  = require("../model/productmodel");
const productdetail  = require("../model/productdetailmodel");

const createdFolder = {

    restaurantImage : (req, res) => {
   
            var link = './uploads/restaurants/' + req.body.restaurantName;
    

             if ( !fs.existsSync(link)){
                console.log('!fs.existsSync(link)');
                 fs.mkdirSync(link, { recursive: true });
                 res.status(200).json({'link': link});
                 
            } else {
           
                res.status(200).json({'link': link});

            }
    },

    productImage : (req, res) => {
                 var link = './uploads/restaurants/' + req.body.restaurantName + '/' + req.body.productName;
                  if ( !fs.existsSync(link)){
                     console.log('!fs.existsSync(link)');
                      fs.mkdirSync(link, { recursive: true });
                      res.status(200).json({'link': link});  
                 } else {                
                res.status(200).json({'link': link});
           
                 }
         },

         productDetailImage : (req, res) => {
    
            var link = './uploads/restaurants/' + req.body.restaurantName + '/' + req.body.productName +'/'+req.body.productDetailName ;
    

             if ( !fs.existsSync(link)){
                console.log('!fs.existsSync(link)');
                 fs.mkdirSync(link, { recursive: true });
                 res.status(200).json({'link': link});
                 
            } else {
           
                res.status(200).json({'link': link});

            
            }
    },

    deleteRestaurantImage:async (req, res) =>{
        console.log('deleteRestaurantImage');
       const restaurantImageFromFrontEnd = req.body.restaurantImage;
    //    alert(restaurantImageFromFrontEnd.substring('http://127.0.0.1:3000'.length));
       const temporaryImageLink = restaurantImageFromFrontEnd.replaceAll('http://127.0.0.1:3000/', '');
       const temporaryDirname = __dirname.replaceAll('controllers', '');
         const absoluteImageLink =  temporaryDirname + temporaryImageLink;
console.log('absoluteImageLink');
console.log(absoluteImageLink);
         try {
            fs.unlinkSync(absoluteImageLink);
            console.log('deleteRestaurantImage');
            const foundedRestaurant = await  restaurant.findOne({restaurantId: req.body.restaurantId});
            foundedRestaurant.restaurantImage = req.body.newRestaurantImage;
            await foundedRestaurant.save();
          } catch (err) {
            console.log('deleteRestaurantImage errerrerr');
            return res.status(400).send(err);
          }
    },

    deleteProductImage:async (req, res) =>{
      console.log('deleteProductImage');
     const restaurantImageFromFrontEnd = req.body.productImage;
  //    alert(restaurantImageFromFrontEnd.substring('http://127.0.0.1:3000'.length));
     const temporaryImageLink = restaurantImageFromFrontEnd.replaceAll('http://127.0.0.1:3000/', '');
     const temporaryDirname = __dirname.replaceAll('controllers', '');
       const absoluteImageLink =  temporaryDirname + temporaryImageLink;
console.log('absoluteImageLink');
console.log(absoluteImageLink);
       try {
          fs.unlinkSync(absoluteImageLink);
          // console.log('deleteProductImage');
          const foundedProduct = await  product.findOne({productId: req.body.productId});
          console.log('foundedProduct trong deleteProductImage')
          console.log(foundedProduct)
          foundedProduct.productImage = req.body.newProductImage;
          await foundedProduct.save();
        } catch (err) {
          console.log('deleteProductImage errerrerr');
          return res.status(400).send(err);
        }
  },
  deleteProductDetailImage:async (req, res) =>{
    console.log('deleteProductDetailImage');
   const productdetailImageFromFrontEnd = req.body.productdetailImage;
//    alert(restaurantImageFromFrontEnd.substring('http://127.0.0.1:3000'.length));
   const temporaryImageLink = productdetailImageFromFrontEnd.replaceAll('http://127.0.0.1:3000/', '');
   const temporaryDirname = __dirname.replaceAll('controllers', '');
     const absoluteImageLink =  temporaryDirname + temporaryImageLink;
console.log('absoluteImageLink');
console.log(absoluteImageLink);
     try {
        fs.unlinkSync(absoluteImageLink);
        console.log('deleteProductDetailImage');
        const foundedProduct = await  productdetail.findOne({productdetaiId: req.body.productdetailId});
        foundedProduct.productdetaiImage = req.body.newProductDetailImage;
        await foundedProduct.save();
      } catch (err) {
        console.log('deleteProductDetailImage errerrerr');
        return res.status(400).send(err);
      }
}
}

module.exports = createdFolder;  