import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import bookRoute from "./route/books.route.js"
import userSingUp from "./route/user.route.js"
const PORT =process.env.SERVER_PORT || 8000;
const mongoDB_url =process.env.MONGODB_URL 
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
//  connect to mongoDB 
try {
    mongoose.connect("mongodb://localhost:27017/bookStore",{
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB")
} catch (error) {
    console.log(error)
}
app.use("/book",bookRoute);
app.post("/singup",userSingUp);
app.post("/login",userSingUp);
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});