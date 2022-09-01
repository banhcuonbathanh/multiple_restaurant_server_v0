const router = require("express").Router();
const testController = require("../controllers/testController");


router.post("/createtest",testController.addtest);

// router.get("/getAllCategory", categoryController.getAllCategories);

// router.post("/getone", categoryController.getCategory);

// router.post("/getoneandupdate", categoryController.updateCategory);
// router.post("/getOneandDelete", categoryController.getOneandDelete);
module.exports = router;     