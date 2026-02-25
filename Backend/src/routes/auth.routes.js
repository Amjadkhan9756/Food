const expess=require("express");
const authController=require("../controllers/auth.controller.js");


const router=expess.Router();

router.post('/user/register',authController.registerUser);


module.exports=router;