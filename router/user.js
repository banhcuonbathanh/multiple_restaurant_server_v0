const router = require("express").Router();
const userController = require("../controllers/userController");


router.post("/createUser", userController.addUser);
router.post("/signIn", userController.signIn);
router.get("/getAllUser", userController.getAllUser);

router.post("/getone", userController.getOneUser);
router.post("/addFavouriteProductDetail", userController.addFavouriteProductDetail);
router.post("/getFavouriteProductDetail", userController.getFavouriteProductDetail);
router.post("/removeFavouriteProductDetail", userController.removeFavouriteProductDetail);
router.post("/getoneandupdate", userController.getoneandupdate);
router.post("/getOneandDelete", userController.getOneandDelete);
router.post("/addOrderingInformation", userController.addOrderingInformation);

module.exports = router;  