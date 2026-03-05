const foodModel=require("../models/food.model.js");


async function createFood(req,res){
    console.log(req.foodPartner);

    console.log(req.body);

    res.send("food item created ");
    
}



module.exports={
    createFood,
}