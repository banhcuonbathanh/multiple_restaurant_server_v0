
const clickModel  = require("../model/clickmodel");


const clickController = {
    createClick : async (req, res)=>{
        console.log('createTestControoler');
        try {
            const newClick = await clickModel.create({
                monitoringDay: req.body.monitoringDay,
                clickName: req.body.clickName,
                clickingTiming: req.body.clickingTiming,
                productId:req.body.productId,
                productName: req.body.productName,
                restaurantId: req.body.restaurantId,
                restaurantName: req.body.restaurantName,
                // how to edit clicktiming test
                // clickingTimingTest: [
                //     {
                //         restaurantProduct: 'test123',
                //         clickTiming: ['14: 33',]
                //     },
                //     {
                //         restaurantProduct: 'test2',
                //         clickTiming: ['14: 33',]
                //     },  {
                //         restaurantProduct: 'test3',
                //         clickTiming: ['14: 33',]
                //     }
                // ]
            });
        const savedClick = await newClick.save();
        savedClick.clickId  = savedClick._id.valueOf();
        await savedClick.save();

        // ---------------------
        //  add 1 item in array clickingTimingTest
        // const test = await clickModel.findOneAndUpdate({
        //    clickId:'632285dbbf282f8def7f0e7f', 
         

        // },  {
        //      $push:{
        //     clickingTimingTest:{
        //         restaurantProduct: '>>>>>>>>>>>>>',
        //         clickTiming: ['>>>>>>>>>>>>>>>>>>>>>',]
        //     }
            
        // }});
        //  update array click timming
        // const test2 = await clickModel.updateOne({
        //   "clickingTimingTest.restaurantProduct": "test123",

          
 
        //  },  {
        //       $set:{
        //   "clickingTimingTest.$.clickTiming": 'asdfsd'
             
        //  }});
        // test.clickingTimingTest.push({
        //     restaurantProduct: '>>>>>>>>>>>>>>>>>>>>>>',
        //     clickTiming: ['14: 33',]
        // })
// console.log('test');
// console.log(test);
        res.status(200).json(savedClick);
    } catch (error) {
        console.log('addCategory error trong category controller');
        res.status(500).json(error);
    }
    },

    addTimeClick : async (req, res)=>{
    


        try {
            const foundedClick = await  clickModel.findOne({clickName: req.body.clickName});
            console.log('foundedClick');
            console.log(foundedClick);
            foundedClick.clickingTiming.push(req.body.clickingTiming);
           await foundedClick.save();

          } catch (err) {
            console.log('addTimeClick error trong click controller');
            res.status(500).json(err);
          }
    },

    // --------------------------
    checkAvailableClick : async (req, res)=>{
        console.log('req.body.clickingTiming');
        console.log(req.body.clickingTiming)

        try {
             
            const foundedClick = await  clickModel.find({clickName: req.body.clickName});
            console.log('foundedClick');
            console.log(foundedClick.length > 0);
               if(foundedClick.length > 0){
                try {
                    const foundedClick = await  clickModel.findOne({clickName: req.body.clickName});
                    console.log('foundedClick');
                    console.log(foundedClick);
                    foundedClick.clickingTiming.push(req.body.clickingTiming);
                   await foundedClick.save();
                   res.status(200).json(foundedClick);
                  } catch (err) {
                    console.log('addTimeClick error trong click controller');
                    res.status(500).json(err);
                  }
               } else {

                try {
                    const newClick = await clickModel.create({
                        monitoringDay: req.body.monitoringDay,
                        clickName: req.body.clickName,
                        clickingTiming: req.body.clickingTiming,
                        productId:req.body.productId,
                        productName: req.body.productName,
                        restaurantId: req.body.restaurantId,
                        restaurantName: req.body.restaurantName,
                 
                    });
                const savedClick = await newClick.save();
                savedClick.clickId  = savedClick._id.valueOf();
                await savedClick.save();
                   res.status(200).json(foundedClick);
                  } catch (err) {
                    console.log('addTimeClick error trong click controller');
                    res.status(500).json(err);
                  }
// -------



                   
               }
               
        //  --------------------------------
            //     const newClick = await clickModel.create({
            //         monitoringDay: req.body.monitoringDay,
            //         clickName: req.body.clickName,
            //         clickingTiming: req.body.clickingTiming,
            //         productId:req.body.productId,
            //         productName: req.body.productName,
            //         restaurantId: req.body.restaurantId,
            //         restaurantName: req.body.restaurantName,
             
            //     });
            // const savedClick = await newClick.save();
            // savedClick.clickId  = savedClick._id.valueOf();
            // await savedClick.save();
    //    ---------------------------
            // if(foundedClick.length > 0){
            //     foundedClick.clickingTiming.push(req.body.clickingTiming);
            //     await foundedClick.save();
            // } else {
            //     const newClick = await clickModel.create({
            //         monitoringDay: req.body.monitoringDay,
            //         clickName: req.body.clickName,
            //         clickingTiming: req.body.clickingTiming,
            //         productId:req.body.productId,
            //         productName: req.body.productName,
            //         restaurantId: req.body.restaurantId,
            //         restaurantName: req.body.restaurantName,
    
            //     });
            // const savedClick = await newClick.save();
            // savedClick.clickId  = savedClick._id.valueOf();
            // await savedClick.save();
    
       
     
            // res.status(200).json(savedClick);
            // }
             
    
        } catch (err) {
          console.log('addTimeClick error trong click controller');
          res.status(500).json(err);
        }

    
       
    }
}

module.exports = clickController;