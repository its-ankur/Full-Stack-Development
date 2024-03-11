const express=require("express");
const app=express();
app.use(express.static('.'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/getNews",(req,res)=>{
    //res.send("Hello World");
    let obj={
        'name':req.query.name
    }
    res.send(JSON.stringify(obj));
});
app.post("/getNews",(req,res)=>{
    let obj={
        'name':req.body.name
    }
    res.send(JSON.stringify(obj));
});
app.listen(3000,()=>{
    console.log("Server Started");
})