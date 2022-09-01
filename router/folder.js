const router = require("express").Router();
const folderController = require("../controllers/folderController");


router.post("/createRestaurantImage", folderController.restaurantImage);
router.post("/createProductImage", folderController.productImage);
router.post("/createProductDetailImage", folderController.productDetailImage);
router.post("/deleteRestaurantImage", folderController.deleteRestaurantImage);
router.post("/deleteProductImage", folderController.deleteProductImage);
router.post("/deleteProductDetailImage", folderController.deleteProductDetailImage);
// router.get("/getAllCategory", categoryController.getAllCategories);

// router.post("/getone", categoryController.getCategory);

// router.post("/getoneandupdate", categoryController.updateCategory);
// router.post("/getOneandDelete", categoryController.getOneandDelete);
module.exports = router;     