const foodModel = require("../models/food.model.js");
const storageService = require('../services/storage.service.js');
const {v4:uuid}=require("uuid");

async function createFood(req, res) {
    // console.log(req.foodPartner);

    // console.log(req.body);


    const fileUploadResult = await storageService.uploadFile(req.file.buffer,uuid())
    // console.log(fileUploadResult);




    // res.send("food item created ");
    const foodItem=await foodModel.create({
        name:req.body.name,
        description:req.body.description,
        video:fileUploadResult.url,
        foodPartner:req.foodPartner._id
    });

    req.status(201).json({
        message:"food created successfully",
        food:foodItem
    })

}



module.exports = {
    createFood,
}