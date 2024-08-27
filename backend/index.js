const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection with Mongodb 
mongoose.connect("mongodb+srv://ombhavsar2004:SrZW4BYUgSoByXmJ@cluster0.u9d68.mongodb.net/e-commerce");

// API Creaction
app.get("/", (req, res) => {
    res.send("Express App is Running")
})

// Image Storage Engine
const storage = multer.diskStorage({
    destination: './Upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({storage: storage})

// Creating Upload Endpoint for images
app.use('/images', express.static('Upload/images'))
app.post("/Upload", upload.single("product"), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
}) 

app.listen(port, (error) =>{
    if(!error)
        {
        console.log("Server Running on Port " + port);
    }
    else
    {
        console.log("Error : " + error);
    }
});