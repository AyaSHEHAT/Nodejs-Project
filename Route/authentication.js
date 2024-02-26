const express=require("express");
const controller=require("../Controller/authentication");
const route=express.Router();


route.post("/login",controller.login);

module.exports=route;
