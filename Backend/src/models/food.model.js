const mongoose =require("mongoose");
const foodPartnerModel = require("./foodpartner.model");

const foodSchema=mongoose.Schema({
    name:{
        type:String,
        require:true

    },
    video:{
        type:String,
        require:true


    },
    desciption:{

        type:String,
    },
    foodPartner:{
        type:mongoose.Schema.type.ObjectId,
        ref:"foodpartner"

    }
})

const foodModel=mongoose.model("food",foodSchema);
module.exports=foodModel;