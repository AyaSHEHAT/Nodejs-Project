const express=require("express");
const mongoose=require("mongoose");
require("dotenv").config();
const studentRoute=require("./Route/studentRoute"); 
const teacherRoute=require("./Route/teacherRoute"); 
const classRoute=require("./Route/classRoute"); 
const authenticationRoute=require("./Controller/authentication"); 
const authMW=require("./MiddleWar/Autherozation"); 

const server=express(); 
const port=process.env.PORT||8080;
mongoose.connect(process.env.db_URL)
.then(()=>{
    console.log("DB connected .... ");
    server.listen(port,()=>{
        console.log("I am listening.........",port);
    });
})
.catch((error)=>{
    console.log("DB connection Problem "+error);
})
//------------------  Build Server---------------------------------------------

server.use((request,response,next)=>{
    console.log("First use function", request.url,request.method);
    next();
});

//--------------- settings

server.use(express.json());
server.use(express.urlencoded({extended:true}));

//--------------- routes 
 //server.use(authenticationRoute);

server.use(authMW);
server.use(studentRoute);
server.use(teacherRoute);
server.use(classRoute);




//3---------- Not Found MW
server.use((request,response)=>{
    response.status(404).json({message:"Not Found"});
});
//4------------- Error   callback (4 inputs)    funtion.length
server.use((error,request,response,next)=>{

    response.status(error.status||500).json({message:error+""});
})



