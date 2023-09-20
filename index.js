const express=require('express') //get Express instance
const app=express() //Instantiate server

require("dotenv").config()
const PORT=process.env.PORT || 3000;

//middleware to parse json request body
app.use(express.json());


//import routes for Todo API

const blog=require("./routes/blog");
 
//mount the Todo API routes

app.use("/api/v1",blog);

// Start Server

app.listen(PORT,()=>{
    console.log(`Served Started at ${PORT}`);
})

//Connect to the DataBase

const dbConnect=require("./config/database");
dbConnect();

//Default Route

app.get("/",(req,res)=>{
    res.send(`<h1> This is Home Page</h1>`);
})