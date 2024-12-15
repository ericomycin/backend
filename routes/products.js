import express from "express";

const products = express.Router();

products.get("/products", (req,res)=>{
    res.send("<h1>You are at the Products page</h1>");
    console.log("Products page")
})

export default products