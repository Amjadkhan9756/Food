const express=require("express");
const foodContoller=require("../controllers/food.controller.js");
const authMiddleware=require("../middleware/auth.middleware.js");

const router=express.Router();

//POST/api/food/[protected]

router.post("/",authMiddleware.authFoodPartnerMiddleware,foodContoller.createFood);


module.exports=router;
