const router = require("express").Router();
const categoryController = require("../controllers/categoryController");


router.post("/createCategory", categoryController.addCategory);

router.get("/getAllCategory", categoryController.getAllCategories);

router.post("/getone", categoryController.getCategory);

router.post("/getoneandupdate", categoryController.updateCategory);
router.post("/getOneandDelete", categoryController.getOneandDelete);
// router.post("/searchingRestaurantsss", categoryController.searchingRestaurantsss);
module.exports = router;     