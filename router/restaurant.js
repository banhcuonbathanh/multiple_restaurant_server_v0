const router = require("express").Router();

const restaurantController = require("../controllers/restaurantContronller");



// router.post("/createRestaurant", upload.single("image"), restaurantController.addRestaurantd);
router.post("/searchingRestaurantWithNameLetter", restaurantController.searchingRestaurantWithNameLetter);
router.post("/createRestaurant", restaurantController.addRestaurantd);
router.post("/searchingRestaurantPromotion", restaurantController.searchingRestaurantPromotion);
router.get("/getAllRestaurant", restaurantController.getAllRestaurant);

router.post("/searchingRestaurantId", restaurantController.searchingRestaurantId);
router.post("/getone", restaurantController.getRestaurant);
router.post("/getoneandupdate", restaurantController.getOneupdateRestaurant);
router.post("/getOneandDelete", restaurantController.getOneandDelete);
router.post("/searchingRestaurantswithCategory_Page", restaurantController.searchingRestaurantswithCategory_Page);
module.exports = router;     