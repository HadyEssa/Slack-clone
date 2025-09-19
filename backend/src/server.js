import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import {clerkMiddleware} from "@clerk/express";
import { serve } from "inngest/express";
import { functions, inngest } from "./config/inngest.js";
import express from "express";


const app = express();

app.use(clerkMiddleware());
app.use(express.json());

app.use("/api/inngest", serve({ client: inngest, functions }));


app.get("/",(req,res)=>{
    res.send("Hello World 123");
})

const startServer = async ()=>{
    try{
        await connectDB();
    if(ENV.NODE_ENV !== "production"){
        app.listen(ENV.PORT,()=>{
            console.log("server is running", ENV.PORT);
        })
    }
    }catch(error){
        console.error("Error starting server:", error);
    }
}
startServer();

export default app;