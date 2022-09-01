const router = require("express").Router();
const productController = require("../controllers/productController");


router.post("/createProduct", productController.addProduct);
router.post("/searchingProductsWithNameLetter", productController.searchingProductsWithNameLetter);
router.get("/getAllProduct", productController.getAllProducts);

router.post("/getone", productController.getProduct);


router.post("/searchingProducts", productController.searchingProducts);

router.post("/getProductUpdatetopping", productController.getProductUpdatetopping);
router.post("/getoneandupdate", productController.updateProduct);
router.post("/getOneandDelete", productController.getOneandDelete);
router.post("/deleteAllProductOfRestaurant", productController.deleteAllProductOfRestaurant);
module.exports = router;     