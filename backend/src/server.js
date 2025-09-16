import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";


const app = express();



app.get("/",(req,res)=>{
    res.send("Hello World 123");
})

app.listen(ENV.PORT,()=>{
    console.log("server is running", ENV.PORT);
    connectDB();
})