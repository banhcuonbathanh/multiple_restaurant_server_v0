const router = require("express").Router();
const orderTestController = require("../controllers/orderTestController");


router.post("/createOrderTestModel", orderTestController.createOrderTestModel);
router.post("/searchingorderByBuyingUserId", orderTestController.searchingorderByBuyingUserId);
router.post("/updateOrder", orderTestController.updateOrder);
router.post("/searchingorderByRangeOfDate", orderTestController.searchingorderByRangeOfDate);
module.exports = router;     