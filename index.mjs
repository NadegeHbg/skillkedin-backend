import express from "express";
import mongoose from "mongoose";
import dbConnect from './controller/dbConnect.mjs'
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import create_questions from "./controller/addData.mjs";
import getQuestions from "./controller/getData.mjs";
import data from "./controller/data.mjs";
import getCategory from "./controller/getCategory.mjs";
import getCategoryTypes from "./controller/typesOfCategory.mjs";

const app = express();
app.use(express.json());//req.body
dotenv.config();
dbConnect();

app.use(cors({origin:['','http://localhost:5173']}));
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
app.get("/", (req, res) => {
        res.status(200).send("Engine Started, Ready to take off!");
        
})
// app.post("/adddata",create_questions)

//get all the questions of all categories
app.get("/data",getQuestions)

//get types of category
app.get("/category",getCategoryTypes)

// app.get("/getdata", data)

//get questions of one category
app.get("/getCategory/:category",getCategory)

app.listen(8000, ()=>{
    console.log("server started on port 8000")
})

