

const orderModel = require("../model/ordermodel");

const orderController = {

//     testorder : async (req, res)=>{
// console.log('testorder')
//         try {
//             const allOrder = await orderModel.find();
           
//             res.status(200).json(allOrder);
//         } catch (error) {
//             console.log('getAllOrder error trong prodeuct controller');
//             res.status(500).json(error.message);
//         }
//         },
    createOrder : async (req, res)=>{
        console.log('createOrder')

        try {
            const newOrder = await orderModel.create({
                BuyingUserId: 'req.body.BuyingUserId',
                ProductId: 'req.body.ProductId',
                address:'req.body.address',
                restaurantId: 'req.body.restaurantId',
                day:'req.body.day',
                hour:'req.body.hour',
                minute:'req.body.minute',
                statusOrder:'req.body.statusOrder',
                restaurantOnwnerId: 'req.body.restaurantOnwnerId',
                productdetailsList:[],
                toppingsList:[],
               
                
                // 'req.body.productdetailsList'
                // 'req.body.toppingsList'
                // category:req.body.category,
            });
        const orderSaved = await newOrder.save();
  
        orderSaved.orderId  = orderSaved._id.valueOf() 
        await orderSaved.save();
        res.status(200).json(orderSaved);
    } catch (error) {
        console.log('orderSaved error trong addDetailProduct controller');
        res.status(500).json(error);
    }
    },
    // ---------------------------------------------------------------------------


    getOneOrderById : async (req, res)=>{
        // console.log('getOneOrderById');
        // console.log(req.body.orderId);
    
        try {
            const searchOrder = await orderModel.findOne({orderId: req.body.orderId});
            // console.log(searchOrder);
            res.status(200).json(searchOrder);
        } catch (error) {
            console.log('getOneOrderById error trong prodeuct controller');
            res.status(500).json(error.message);
        }
        },


         // ---------------------------------------------------------------------------


    getOneOrderByBuyingUserId : async (req, res)=>{
        // console.log('getOneOrderById');
        // console.log(req.body.orderId);
    
        try {
            const searchOrder = await orderModel.find({BuyingUserId: req.body.BuyingUserId});
 
            res.status(200).json(searchOrder);
        } catch (error) {
            console.log('getOneOrderById error trong prodeuct controller');
            res.status(500).json(error.message);
        }
        },
// ---------------------------------------------------------------------------


getAllOrder : async (req, res)=>{
    console.log('getAllOrder')

    try {
        const allOrder = await orderModel.find();
       
        res.status(200).json(allOrder);
    } catch (error) {
        console.log('getAllOrder error trong prodeuct controller');
        res.status(500).json(error.message);
    }
    },
    

// ---------------------------------------------------------------------------

// ----------------------------------------------------------------------------
updateOrderById : async (req, res)=>{
    // console.log('req.body.productPriceCaoNhat')
    // console.log(req.body.productPriceCaoNhat)
            try {
                const foundedOrder = await orderModel.findOneAndUpdate({orderId:req.body.orderId  }, 
                    {
                        BuyingUserId: req.body.BuyingUserId,
                        ProductId:req.body.ProductId,
                        productId: req.body.productId,
                        restaurantId: req.body.restaurantId,
                        productdetailsIdList: req.body.productdetailsIdList,
                        toppingsList: req.body.toppingsList,
                        statusOrder:req.body.statusOrder,
                        address: req.body.address,
                        orderTiming: req.body.orderTiming,
                        orderId: req.body.orderId,
                        restaurantOnwnerId: req.body.restaurantOnwnerId,
                
                });
                res.status(200).json(foundedOrder);
            } catch (error) {
                console.log('updateProduct error trong updateProduct controller');
                res.status(500).json(error);
            }
            },
    // ---------------------------------------------------------------------------


        getOneandDeleteByOrderId : async (req, res) =>{
//             console.log('getOneandDelete productDetailController')
// console.log(req.body.productdetaiId)
            try {
                await orderModel.findOneAndDelete({orderId:req.body.orderId  });



  //------------------------------------------------
                res.status(200).json('find   and delete');

                
            } catch (error) {
               console.log('getOneandDelete error trong product controller');
                res.status(500).json(error);
            }
          
        }
}

module.exports = orderController;