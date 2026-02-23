const mongoose =require("mongoose");

 function connectDB(){
    mongoose.connect("mongodb://localhost:27017/food-view")
            .then(()=>{
                console.log("mongoDB connected");

            })
            .catch((error)=>{
                console.log("MongoDB connection error"   +error)
            })
}
module.exports=connectDB;
// export default connectDB;