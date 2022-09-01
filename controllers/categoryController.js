
const category  = require("../model/categorymodel");


const categoryController = {
    // ---------------------------------------------------------------------------
addCategory : async (req, res)=>{
    console.log('addCategory');
    try {
        const newCategory = await category.create({
            categoryName: req.body.categoryName,
            categoryImage: req.body.categoryImage,
            categoryId:req.body.categoryId,
            ship: req.body.ship,
            booking: req.body.booking,
        });
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
} catch (error) {
    console.log('addCategory error trong category controller');
    res.status(500).json(error);
}
},
// ---------------------------------------------------------------------------

getAllCategories : async (req, res)=>{

try {
    const allCategories = await category.find();
   
    res.status(200).json(allCategories);
} catch (error) {
    console.log('getAllCategories error trong category controller');
    res.status(500).json(error.message);
}
},

// ---------------------------------------------------------------------------
getCategory : async (req, res)=>{
    console.log('req.body.categoryId');
    
    try {
        const foundedCategory = await  category.findOne({categoryId: req.body.categoryId});
        console.log(foundedCategory);
        res.status(200).json(foundedCategory);
    } catch (error) {
        console.log('getCategory error trong category controller');
        res.status(500).json(error);
    }

   

    },

// ---------------------------------------------------------------------------
    updateCategory : async (req, res)=>{
        console.log('updateCategory');
        
        try {
     
           
            const foundedCategory = await category.findOneAndReplace({categoryId:req.body.categoryId  }, {categoryName: req.body.categoryName,
                categoryImage: req.body.categoryImage,
                categoryId:req.body.categoryId,
                ship: req.body.ship,
                booking: req.body.booking,});


            res.status(200).json(foundedCategory);
        } catch (error) {
            console.log('updateCategory error trong category controller');
            res.status(500).json(error);
        }
    
       
    
        },

// ---------------------------------------------------------------------------
        getOneandDelete : async (req, res) =>{


            try {
                await category.findOneAndDelete({categoryId:req.body.categoryId  });
                res.status(200).json('find   and delete');
            } catch (error) {
               console.log('getOneandDelete error trong category controller');
                res.status(500).json(error);
            }
          
        }
}

module.exports = categoryController;