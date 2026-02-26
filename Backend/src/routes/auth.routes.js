const expess=require("express");
const authController=require("../controllers/auth.controller.js");


const router=expess.Router();


// user auth APIs

router.post('/user/register',authController.registerUser);
router.post('user/login',authController.loginUser);


module.exports=router;