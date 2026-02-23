const app=require("./src/app.js")
const connectDB =require("./src/db/db.js");

connectDB();

app.listen(8080,()=>{
    console.log("sever is connected ");
});
