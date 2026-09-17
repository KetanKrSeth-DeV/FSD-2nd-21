import express from 'express';
import cors from 'cors';
import fs from 'fs';
const app=express();
app.use(cors());
app.use(express.json());
app.get("/products",(req,res)=>{
const data=fs.readFile("products.json","utf-8");
   const product=JSON.parse(data);
    res.json(product);
});
app.post("/products",(req,res)=>{
const data=fs.readFile("products.json","utf-8");
   const product=JSON.parse(data);
   const newproduct={
    id:product.length+1,
    name:req.body.name,
    price:req.body.price,
   }
   product.push(newproduct);
   fs.writeFile("products.json",JSON.stringify(product,null,2));
   res.json(newproduct);
});
app.listen(3000,()=>{
console.log("server is running on port 3000");    
})