const express =require("express");
const cookieParer=require("cookie-parser");
const authRoutes=require("./routes/auth.routes.js")
const app=express();


app.use(cookieParer());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello  world"); 
});
app.use("/api/auth",authRoutes)
module.exports=app;