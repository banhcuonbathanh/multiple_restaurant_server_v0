const router = require("express").Router();
const toppingController = require("../controllers/toppingController");


router.post("/createTopping", toppingController.createTopping);
router.post("/createToppingProductDetail", toppingController.createToppingProductDetail);
router.get("/getAllTopping", toppingController.getAllTopping);

router.post("/deleteAllTopping", toppingController.deleteAllTopping);


router.post("/searchingToppingWithProductId", toppingController.searchingToppingWithProductId);

router.post("/searchingToppingWithProductDetailId", toppingController.searchingToppingWithProductDetailId);
router.post("/getaTopping", toppingController.getaTopping);
router.post("/updateTopping", toppingController.updateTopping);
router.post("/getOneandDelete", toppingController.getOneandDelete);
module.exports = router;     