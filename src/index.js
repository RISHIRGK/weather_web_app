const exp = require("constants")
const express =require("express")
const  app=express()
const path=require("path")
const website_path=path.join(__dirname,"../public")

 app.use(express.static(website_path))
 app.set("view engine","hbs")
 app.set("views",path.join(__dirname,"../views"))
 app.get("/",(req,res)=>
 {
    res.render("index",{
        i:"is"
    })
    
 })
 app.get("/weather",(req,res)=>
 {
    res.render("weather")
 })
app.listen(8000,()=>
{
    console.log("the server is running on port 8000")
})