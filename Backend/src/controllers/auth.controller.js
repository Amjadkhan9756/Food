const userModel=require("../models/user.model.js");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

async function registerUser(req,res){
    const {fullName,email,password}=req.body;
    const isUserAlreadyExist = await userModel.findOne({
        email
    });

    if(isUserAlreadyExist){
        return res.status(400).json({message:"user allready exist "});

    }
    const hashPassword=await bcrypt.hash(password,10);

    const user=await userModel.create({
        name,
        email,
        password:hashPassword,

    })
    const token=jwt.sign({
        id:user._id,    
    },"b27b84544068dbaaba6aa8a8bcd8044c")

    res.cookie("token",token);

    res.status(201).json({message:"user register successfully ",
        user:{
            _id:user._id,
            email:user.email,
            fullName:user.fullName
        }
    });


}

module.exports={
    registerUser,
}