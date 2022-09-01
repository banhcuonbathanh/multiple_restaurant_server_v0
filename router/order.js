const router = require("express").Router();

const orderController = require("../controllers/orderController");
// router.post("/testorder", orderController.testorder);
router.post("/createOrder", orderController.createOrder);
router.post("/getOneOrderById", orderController.getOneOrderById);
router.post("/getOneOrderByBuyingUserId", orderController.getOneOrderByBuyingUserId);
router.post("/getAllOrder", orderController.getAllOrder);
router.post("/updateOrderById", orderController.updateOrderById);
router.post("/getOneandDeleteByOrderId", orderController.getOneandDeleteByOrderId);

module.exports = router;     