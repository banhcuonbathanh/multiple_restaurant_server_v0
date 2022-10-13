const router = require("express").Router();
const clickController = require("../controllers/click_controller");


router.post("/createClick", clickController.createClick);
router.post("/addTimeClick", clickController.addTimeClick);
router.post("/checkAvailableClick", clickController.checkAvailableClick);
// router.get("/getAllCategory", categoryController.getAllCategories);

// router.post("/getone", categoryController.getCategory);

// router.post("/getoneandupdate", categoryController.updateCategory);
// router.post("/getOneandDelete", categoryController.getOneandDelete);
module.exports = router;     