const router = require("express").Router();
const productDetailController = require("../controllers/productdetailController");


router.post("/createProductDetail", productDetailController.addDetailProduct);
router.post("/searchingProductsDetailWithNameLetter", productDetailController.searchingProductsDetailWithNameLetter);
router.get("/getAllProductDetail", productDetailController.getAllProductDetail);

router.post("/getProductDetail", productDetailController.getProductDetail);


router.post("/searchingProductdetailRestaurantId", productDetailController.searchingProductdetailRestaurantId);


router.post("/getoneandupdate", productDetailController.updateProduct);
router.post("/getOneandDelete", productDetailController.getOneandDelete);
router.post("/deleteAllProductDetailOfRestaurant", productDetailController.deleteAllProductDetailOfRestaurant);
module.exports = router;     