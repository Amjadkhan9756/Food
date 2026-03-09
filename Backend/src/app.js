const express =require("express");
const cookieParer=require("cookie-parser");
const foodRoutes = require("./routes/food.routes.js");
const authRoutes=require("./routes/auth.routes.js")
const app=express();


app.use(cookieParer());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello  world"); 
});
app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);















module.exports=app;