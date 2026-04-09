const express =require("express");
const cookieParer=require("cookie-parser");
const foodRoutes = require("./routes/food.routes.js");
const authRoutes=require("./routes/auth.routes.js")
const cors = require("cors");
const app=express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParer());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("hello  world"); 
});
app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);















module.exports=app;