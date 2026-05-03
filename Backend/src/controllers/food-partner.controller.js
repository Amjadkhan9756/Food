const foodPartnerModel = require("../models/foodpartner.model");

const foodModel = require("../models/food.model");


async function getFoodPartnerById(req,res){
    const foodPartnerId = req.param.id;
    
    const foodPartner = await foodPartnerModel.findById(foodPartner);
    const foodItemsByFoodPartner = await foodModel.find({foodPartner:foodPartnerId});

    if(!foodPartner){
        return res.status(404).json({message:"Food parnert not found"});

    }

    res.status(200).json({
        message:"Food partner retrieved successfully",
        foodParner:{
            ...foodPartner.toObject(),
            foodItems:foodItemsByFoodPartner
        }
    });

}


module.export = {
    getFoodPartnerById
}